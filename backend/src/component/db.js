const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Student_mg")
.then(()=>{
    console.log("DB connected")
})

const Database=new mongoose.Schema({
    title:String,
    roll:String,
    class_name:String,
    school:String,
    phone:String
})

module.exports=new mongoose.model("students",Database)