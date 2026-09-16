let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let app = express();
let User = require("/Users/praptibhandari/Documents/SEM3 webDev/Backend/Assigment/server_db");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/db").then(()=>{
   console.log("db......");
})

app.post("/signUp", async(req,res)=>{
    let{name,email,password}= req.body;
    console.log(name);
    console.log(email);
    console.log();
    
    let user = new User({name,email, password});

    await user.save();


    res.send("Signup API working")
})

app.listen(3000,()=>{
    console.log("connected")
});
