const express = require("express");
const cors = require("cors");
const app = express();
let User = require("/Users/praptibhandari/Documents/SEM3 webDev/Backend/Assigment/db");
let bcryptjs=  require('bcryptjs')
app.use(express.json());
app.use(cors());

app.post('/registrstion',(req,res)=>{
    const{name,email,password} = req.body;
    
    res.json({
        name: this.name,
        email: this.email,
        password: this.password
    });

    res.json({
        message:'hogya aapka registration'
    });
})

app.listen(3000, () => {
    console.log('server running on port 3000')
})