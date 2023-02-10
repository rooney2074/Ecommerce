const express = require('express')

const cors=require('cors')

const dataService = require('./services/dataService')

const app = express()

//to parse JSON
app.use(express.json())

app.listen(3000,()=>{
    console.log('listening to port 3000')
})

app.use(cors({
    origin:'http://localhost:4200'
}))

//api to get all products

app.get('/all-products',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/getwishlist',(req,res)=>{
    dataService.getWishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//to delete wish list product

app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result) 
    })
})