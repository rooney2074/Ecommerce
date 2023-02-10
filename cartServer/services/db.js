//1 import mongoose

const { log } = require('console')
const mongoose = require('mongoose')

//2 Define connection String

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to mongoDB')
})

//model creation

const Product = mongoose.model('product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

//model for wish list

const Wishlist = mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String

})

//4 export

module.exports={
    Product,
    Wishlist
}