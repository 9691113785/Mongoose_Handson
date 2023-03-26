const mongoose=require("mongoose");

//Schema Shold tart with capital letter
const studentSchema = new mongoose.Schema({
    firstName: {type:String, required:Boolean},
    lastName : String,
    age : Number,
    email : String, 
    mobile : String,
    
})

const Information = mongoose.model("information", studentSchema)

module.exports = {Information};