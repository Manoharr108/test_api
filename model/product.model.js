const mongoose = require('mongoose')

const schemas = mongoose.Schema(
    {
        name:{type:String},
        date:{type:String},
        time:{type:String},
        content:{type:String},
        color:{type:String}
    }
)

const passage = mongoose.model("product",schemas)

module.exports = passage;