const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")
const bookModel = require("../models/bookModel")
const { request } = require("express")
const { default: mongoose } = require("mongoose")



// request body => authorId
// let authorId = req.body.author
// authorModel.findById(authorId)

const createBook = async function (req, res) {

    // 3 (a) if author id absent

    let book = req.body
    let authorid = book.author
    if (!authorid) {
        return res.send({ status: false, msg: "that this detail is required" })
    }

    // 3 (b) author if not valid object id

    let author = "6300f31644cd16b96edfe392"
    let authorid2 = book.author  
    bookModel.findById(author)
    if (authorid2 != author)
        return res.send({ msg: "the author is not present", condition: false })


    // 3 (c) if publisher id absent

    let authorid1 = book.publisher
    if (!authorid1) {
        return res.send({ status: false, msg: "that this detail is required" })
    }


    // 3 (d) publisher if not valid object id

    let publisher = "6300f34144cd16b96edfe394"
    let authorid3 = book.publisher
    bookModel.findById(publisher)
    if (authorid3 != publisher)
        return res.send({ msg: "the publisher is not present", condition: false })



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
    let data= req.body
    let allBooks= await publisherModel.updateMany(
        { name: "Penguin" },
        // {name: "HarperCollins"},
        {$set: data},
        {new: true}
    )
    res.send({msg: allBooks})
}



module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports.updateData=updateData

