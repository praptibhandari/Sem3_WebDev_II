let mongoose= require('mongoose')
   
let userSchema=  new mongoose.Schema({
    name:String,
    email:String,
    password:String

})

let User= mongoose.model("user",userSchema)
module.exports=User