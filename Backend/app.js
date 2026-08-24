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

let express= require("express")
 let app= express()
 let products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "mobile",
        price: 69999,
        stock: 10
    },
    {
        id: 2,
        name: "Galaxy S24",
        category: "mobile",
        price: 64999,
        stock: 8
    },
    {
        id: 3,
        name: "MacBook Air",
        category: "laptop",
        price: 99999,
        stock: 5
    },
    {
        id: 4,
        name: "Dell XPS 14",
        category: "laptop",
        price: 89999,
        stock: 7
    },
    {
        id: 5,
        name: "AirPods Pro",
        category: "headphones",
        price: 24999,
        stock: 15
    },
    {
        id: 6,
        name: "Sony XM5",
        category: "headphones",
        price: 29999,
        stock: 12
    }
];

app.get('/',(req,res)=>{
   res.send(products)
   // res.send("hehe")


})
app.get('/product/:id',(req,res)=>{
   let {id}=req.params
  let data= products.find((a)=>{
      return a.id===Number(id)

   })
   if(!data){
      return res.status(404).json({msg:"not founddddddddd"})
   }
   res.status(200).json({msg:data})
   // console.log(data,"ididid");
   


})

app.get('/search',(req,res)=>{
   let {category}=req.query

    
      let data=   products.filter((a)=>{
            return a.category==category
         })

         if(!data){
            return res.status(404).json({msg:"not founddddddddd"})

         }
         res.status(200).json({msg:data})
         
   

})

 app.listen(4000,()=>{
   console.log("server.....");
   

 })
