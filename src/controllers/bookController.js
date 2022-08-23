const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")
const bookModel = require("../models/bookModel")
const { request } = require("express")
const { default: mongoose } = require("mongoose")



const createBook = async function (req, res) {

    // 3 (a) if author id absent

    let book = req.body
    let authorid = book.author
    if (!authorid) {
        return res.send({ status: false, msg: "that this detail is required" })
    }

    // 3 (b) author if not valid object id

    let author = await authorModel.findById(book.author)
    if(!author) {
        return res.send({status: false, msg: "Author id is not valid"})
    }


    // 3 (c) if publisher id absent

    let authorid1 = book.publisher
    if (!authorid1) {
        return res.send({ status: false, msg: "that this detail is required" })
    }


    // 3 (d) publisher if not valid object id

    let publisher = await publisherModel.findById(book.publisher)
    if(!publisher) {
        return res.send({status: false, msg: "Publisher id is not valid"})
    }
 

    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}


// get books data

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}


// 4 .  fetches all the books along with their author details and publisher details

const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author publisher')
    res.send({ data: specificBook })

}


// 5 . using put
const updateData= async function (req, res) {

    //a)
    // get books by the publioshers - Penguin and HarperCollins
    let requiredPublishers = 
    await publisherModel.find({$or: [{name: "Penguin"},{name: "HarperCollins"}]}, {_id: 1})
    //let books = await bookModel.find().populate('publisher')
    //for
    let requiredPublisherIds = [] 
    for (let i = 0; i < requiredPublishers.length; i++) {
        requiredPublisherIds.push(requiredPublishers[i]._id)
    }

    let updatedBooks = await bookModel.updateMany({publisher : {$in: requiredPublisherIds}}, {isHardCover: true}, {new: true})
    res.send({data: updatedBooks})
} 

// 5 b)

    
    



module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports.updateData=updateData

