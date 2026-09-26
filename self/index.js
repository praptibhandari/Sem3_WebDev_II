let express = require('express')

let signUp = require('./routers/SignUp.js')
let login = require('./routers/Login.js')

let app = express()
app.use(express.json())
app.use('/', signUp)
app.use('/', login)

app.listen(3000, () => {
    console.log("server......");
})