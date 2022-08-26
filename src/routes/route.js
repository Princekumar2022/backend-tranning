const express = require('express');
const router = express.Router();
const commonMW = require ("../middlewares/commonMiddlewares")
const UserController= require("../controllers/userController")
const OrderController = require("../controllers/orderController")
const Productcontroller= require("../controllers/productController")




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// assignment

 router.post("/createProduct",Productcontroller.createProduct)

// 
 router.post("/createOrder",commonMW.mid1, OrderController.createOrder)

//
router.post("/createUser",commonMW.mid1, UserController.createUser)


module.exports = router;