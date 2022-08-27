const orderModel= require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder= async function (req, res) {

    let data=req.body
    let value = req.headers.isfreeappuser
    data.isFreeAppUser=value
    let userId= data.userId
    let productId=data.productId 
    if(!userId){
        return res.send({msg: "userid is mandatory"})
    }else if(!productId){
        return res.send({msg: "productId is mandatory"})
    }

    let userid = await userModel.findById(data.userId)
    if(!userid){
        return res.send({msg: "userId is not valid"})
    }
    let productid= await productModel.findById(data.productId)
    if(!productid){
        return res.send({msg: "productId is not valid"})
    } 

    let num=0
    if(value== "true"){
        data.amount=num
        let savedData=await orderModel.create(data)
        res.send({data: savedData})
    }
    else if(userid.balance>= productid.price){
        await userModel.findOneAndUpdate({_id: userid}, 
            {$set:{balance:userid.balance - productid.price}})
            data['amount']= productid.price;
            data['isFreeAppUser']= req.headers.isfreeappuser;

    
     let savedData= await orderModel.create(data) 
     res.send({data: savedData}) 
    } else {
        return res.send({msg: "user have not enough balance"})
     }
    }

module.exports.createOrder= createOrder
