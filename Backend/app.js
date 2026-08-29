// let express = require('express')
// let app = express()
// app.get('/', (req,res)=>{
//     res.send('hello')
// })
// app.get('/new/:id', (req,res)=>{
//     let{id}=req.params
//     res.send(id)
// })

// app.get('/search', (req, res)=>{
//     console.log(req.query,"hehehe");
// })
// app.listen(3000, () => {
//     console.log("server runningggg");
// })


// let express = require("express")
// let app = express()
// app.get('/', (req,res)=>{
//     res.send('hello')
// })
// app.use(express.json())
// app.get("/",(req, res)=>{
//     res.send("hehehe");
// })

// app.get("/home/:id", (req,res)=>{
//     console.log(req.params);

//     res.send("hello")
// })

// app.post('/about', (req, res)=>{
//     console.log(req.body);
//     res.status(200).json({msg:"hello"})
// })

// app.listen(4000, () => {
//     console.log("server runningggg");
// })

// let express= require("express")
//  let app= express()
// let cors = require('cors')
//  app.use(cors())
//  let products = [
//     {
//         id: 1,
//         name: "iPhone 15",
//         category: "mobile",
//         price: 69999,
//         stock: 10
//     },
//     {
//         id: 2,
//         name: "Galaxy S24",
//         category: "mobile",
//         price: 64999,
//         stock: 8
//     },
//     {
//         id: 3,
//         name: "MacBook Air",
//         category: "laptop",
//         price: 99999,
//         stock: 5
//     },
//     {
//         id: 4,
//         name: "Dell XPS 14",
//         category: "laptop",
//         price: 89999,
//         stock: 7
//     },
//     {
//         id: 5,
//         name: "AirPods Pro",
//         category: "headphones",
//         price: 24999,
//         stock: 15
//     },
//     {
//         id: 6,
//         name: "Sony XM5",
//         category: "headphones",
//         price: 29999,
//         stock: 12
//     }
// ];

// app.get('/',(req,res)=>{
//    res.send(products)
//    // res.send("hehe")


// })
// app.get('/product/:id',(req,res)=>{
//    let {id}=req.params
//   let data= products.find((a)=>{
//       return a.id===Number(id)

//    })
//    if(!data){
//       return res.status(404).json({msg:"noi noi"})
//    }
//    res.status(200).json({msg:data})
//    // console.log(data,"ididid");
   


// })

// app.get('/search',(req,res)=>{
//    let {category}=req.query

    
//       let data=   products.filter((a)=>{
//             return a.category==category
//          })

//          if(!data){
//             return res.status(404).json({msg:"nhi mila ree"})

//          }
//          res.status(200).json({msg:data})
         
   

// })

//  app.listen(4000,()=>{
//    console.log("server.....");
   

//  })


let express= require("express")
let mongoose=   require('mongoose')
let bcryptjs=  require('bcryptjs')
let app=  express()
let cors = require('cors')
let User=  require('./db/db.js')
app.use(express.json())
// app.use('cors')

mongoose.connect("mongodb://127.0.0.1:27017/db").then(()=>{
   console.log("db......");
   
})
app.post("/signUp", async(req,res)=>{
   let {name,email,password}=req.body
  let findData=   await User.findOne({email})
  console.log(findData,"hjehehe");
  
  if(findData){
   return res.send("user jinda haii....")
  }else{
     let updateddP=   await bcryptjs.hash(password,10)
     console.log(updateddP,"dekhoooooo");
     
 let UserInfo=  new User({
      name,
      email,
      password:updateddP

   })
      await UserInfo.save()
      res.send("done.......")
  }


})

app.post('/login',async(req,res)=>{
   let {email,password}=req.body

   let findData =await User.findOne({email})
   console.log(findData,"heheheh");
    
   let validp = await bcryptjs.compare(password,findData.password)
   if (!validp){
   return res.send("Kuch  nhi hoga  tumse")
   }
   res.send("all done.....")

   
})

app.listen(3000,()=>{
   console.log("server......");
   
})