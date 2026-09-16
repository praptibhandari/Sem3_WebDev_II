let mongoose= require('mongoose')
   
let userSchema=  new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:["user","admin","instructor"],
        default:"user"
    },
    resetToken: String,
    resetTokenExpiry: Date,

})

let User = mongoose.model("user",userSchema)
module.exports= User