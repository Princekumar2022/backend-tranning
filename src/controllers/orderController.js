const orderModel= require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder= async function (req, res) {

    // let data = req.body
    // let userId= req.body.userId
    // let productId= req.body.productId
    // let value=req.isFreeAppUser
    // //
    // //userdata= db call for user id
    // //productdata= productid
    // //udsedata and product data !=null
    // //usedata.isfreeappuser==true
    // //
    // let savedData= await orderModel.create(data)
    // res.send({data: savedData})
    //// if(!value){
    // return res.send({msg: "isfreeAppUser is missing"})
    // }


    let data=req.body
    let value = req.headers.isfreeappuser
    data.isFreeAppUser=value
    let userid = await userModel.findById(data.userId)
    if(!userid){
        return res.send({msg: "userId is not valid"})
    }
    let productid= await productModel.findById(data.productId)
    if(!productid){
        return res.send({msg: "productId is not valid"})
    } 
    if(value == "false"){
        if(userid.balance >= data.amount){
            let ordercreated = await orderModel.create(data)
            let update = await userModel.updateOne({_id: userid }, { $inc: {balance: - data.amount}}) 
            let update1 = await userModel.updateOne({_id: userid}, {$set:{isFreeAppUser}})
            return res.send({msg: ordercreated})
         } else if(userid.balance <= data.amount){
            return res.send({msg: "user have not enough balance"})
         }
        }
    
     let savedData= await orderModel.create(data) 
     res.send({data: savedData}) 
        
}   



module.exports.createOrder= createOrder
