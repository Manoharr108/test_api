const mongoose = require('mongoose')

const schemas = mongoose.Schema(
    {
        name:{
            type:String
        },
        number:{
            type:Number
        }
    }
)

const passage = mongoose.model("product",schemas)

module.exports = passage;