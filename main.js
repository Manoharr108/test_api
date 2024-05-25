const express = require('express')
const mongoose = require('mongoose')
const app = express()
const passage = require('./model/product.model.js')
require("dotenv").config()
const cors = require('cors')
app.use(cors("*"))
const port = process.env.PORT || 3000

app.use(express.json())


app.get('/',async(req,res)=>{
    try {
        const product = await passage.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

app.post('/',async(req,res)=>{
    try{
        const product = await passage.create(req.body)
        res.status(200).json(product)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
    
})


app.listen(port,()=>{
    console.log("listening to server "+ port)
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log('connnected')})
    .catch((error)=>{console.log(error)})
})