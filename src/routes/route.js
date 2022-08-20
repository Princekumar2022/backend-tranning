const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishercontroller= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// 1.

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

//2 .

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

// 3 .

router.post("/createPublisher",publishercontroller.createPublisher)

router.get("/getPublisherData",publishercontroller.getPublisherData)
 
// 4 .

router.get("/getBooksWithAuthorAndPublisherDetails", bookController.getBooksWithAuthorAndPublisherDetails)

// 5 .

 router.put("/updateData", bookController.updateData)

module.exports = router;