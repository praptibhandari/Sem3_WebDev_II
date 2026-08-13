// const fs = require('fs')
// // console.log("1")

// // fs.writeFileSync("home.txt", "hello home",()=>{
// //     console.log("meow moew");
// // })

// // console.log("2")
// // console.log("A")

// // fs.unlinkSync('home.txt')

// // fs.mkdirSync("folder")

// fs.rmdirSync('folder')
// // fs.writeFileSync("index.txt", 'hemloo')

// // let data = fs.readFileSync("index.txt")
// // console.log(data.toString(), 'wowowo')



// let os = require('os')

// console.log(os.totalmem()/1024/1024/1024)
// console.log(os.freemem()/1024/1024/1024)
// console.log(os.cpus())
// console.log(os.arch());
// console.log(os.uptime()/3600)


//SERVER
// let http = require("http") //nodemon start for starint the server

// let server = http.createServer((req, res)=>{
//     res.end("hello")
// })

// server.listen(3000, ()=>{
//     console.log("server runningggg")


// let http = require("http");

// let server = http.createServer((req, res) => {

//     if (req.url == "/") {
//         res.end("hello");
//     }
//     else if (req.url == "/about") {
//         res.end("abouttt");
//     }
//     else if (req.url == "/contact") {
//         res.end("contact hehehehbhwahahaha");
//     }
//     else {
//         res.end("404 - Page Not Found");
//     }

// });

// server.listen(3000, () => {
//     console.log("server chl gya");
// });



//////////////////////expresss///////////////////////////

let express = require('express')
let app = express()

app.use((req, res, next)=>{
    console.log("bhoott huu")
    next()
})

app.use((req, res, next)=>{
    console.log("beta merse kaise bachega ??")
})

app.get('/', (req, res)=>{
    res.send("hello")
})
app.listen(3000, () => {
    console.log("server runningggg");
});