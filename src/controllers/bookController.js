const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")

//assignment

//1 book wala h

const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}


const getBooksCollection = async function (req, res) {
    let author_id = await BookModel.find(
        { author_id: "4" })
    if (author_id.length > 0) res.send({ msg: author_id, condition: true })
    else res.send({ msg: "do not accept the entry", condition: false })
}

const getBooksList = async function (req, res) {
    let findauthor = await BookModel.find({author_name:"Chetan Bhagat"});
    let findbook=await BookModel.find({author_id : {$eq: findauthor[0].author_id}});
    res.send({ msg: findbook });
}

const updateBooks = async function (req, res) {
    let bookprice= await BookModel.findOneAndUpdate( 
        { name: "Two states"} ,
        { $set: {price:100} }, 
        {new: true}     
  );
  let updateprice=bookprice.price;
  let authorupdate =await BookModel.find({author_id:{$eq: bookprice.author_id}}).select({author_name:1,_id:0});
     res.send({ msg: authorupdate, updateprice });
    }

    const bookrange =async function(req,res){
        let range = await BookModel.find({price:{$gte:50,$lte:100}});
        let a=range.map(x=>x.author_id);
        let newrange = await BookModel.find({author_id: a}).select({author_name:1,_id:0});
        res.send(newrange);
    }

 











//2 author wala h

const createAuthor = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}


const getBooksData = async function (req, res) {
    let author_id = await BookModel.find(
        { author_id: "4" })
    if (author_id.length > 0) res.send({ msg: author_id, condition: true })
    else res.send({ msg: "do not accept the entry", condition: false })
}



    





//end assignment








// ye sir ka h

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


const updatedBooks = async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks = await BookModel.findOneAndUpdate(
        { authorName: "ABC" }, //condition
        { $set: data }, //update in data
        { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
    )

    res.send({ msg: allBooks })
}

const deleteBooks = async function (req, res) {
    // let data = req.body 
    let allBooks = await BookModel.updateMany(
        { authorName: "FI" }, //condition
        { $set: { isDeleted: true } }, //update in data
        { new: true } ,
    )

    res.send({ msg: allBooks })
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE






module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getBooksCollection = getBooksCollection
module.exports.getBooksData = getBooksData
module.exports.getBooksList = getBooksList
//
module.exports.updateBooks = updateBooks
module.exports.deleteBooks = deleteBooks
module.exports.bookrange = bookrange
