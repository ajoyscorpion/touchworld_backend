const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact: {
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const employees = mongoose.model("employees",employeeSchema)

module.exports = employees