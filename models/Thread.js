const mongoose = require("mongoose")

const TreadSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },  
    }
)

module.exports = mongoose.model('Tread',TreadSchema)