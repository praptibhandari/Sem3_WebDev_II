let express = require('express')
let app = express()
app.get('/', (req,res)=>{
    res.send('hello')
})
app.get('/new/:id', (req,res)=>{
    let{id}=req.params
    res.send(id)
})

app.get('/search', (req, res)=>{
    console.log(req.query,"hehehe");
})
app.listen(3000, () => {
    console.log("server runningggg");
});