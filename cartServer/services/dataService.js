const db = require('./db')

//get all the products from db

const getProducts =()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No products found'
                }
            }
        }
    )
}

const addtowishlist =(id,title,price,description,image)=>{
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Product already exsist"
                }
            }else{
                const newProduct = new db.Wishlist({id,title,price,description,image})
                newProduct.save()
                return{
                    status:false,
                    statusCode:400,
                    message:"Product added successfully"
                }
            }
        }
    )
}

const getWishlist =()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your wishlist is Empty'
                }
            }
        }
    )
}

const deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                // return{
                //     status:true,
                //     statusCode:200,
                //     wishlist:result,
                //     message:"product removed"
                // }
                return db.Wishlist.find().then(
                    (result)=>{
                        if(result){
                            return{
                                status:true,
                                statusCode:200,
                                wishlist:result,
                                message:"product removed successfully"
                            }
                        }
                        else{
                            return{
                                status:false,
                                statusCode:404,
                                message:'Your wishlist is Empty'
                            }
                        }
                    }
                )
            }
            else{
                return{
                    status:false,
                    statusCode:400,
                    message:"Your Wishlist is empty"
                }
            }
        }
    )
}


module.exports ={
    getProducts,
    addtowishlist,
    getWishlist,
    deletewish
}