const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });





//assignment
const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String, 
        required:true
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type: Number, default:2021}, 
    tags: [String],
    authorName: String,
    totalPages: Number,
    stockAvilable: Boolean,
}, { timestamps: true }); 


module.exports = mongoose.model('Book2', bookSchema) //users







//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
