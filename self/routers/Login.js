let express = require("express")
let router = express.Router()

let User = require('../models/userdb.js')
let bcryptjs = require('bcryptjs')
let jwt = require('jsonwebtoken')

router.post('/login', async (req, res) => {
    let { email, password } = req.body
    let findData = await User.findOne({ email })
    console.log(findData, "heheh");
    if (!findData) {
        return res.send("user nahi mila")
    }
    let validP = await bcryptjs.compare(password, findData.password)
    if (!validP) {
        return res.send("kuch nhi ho payega aapse.....")
    }

    let token = jwt.sign(
        {
            id: findData._id,
            email: findData.email,
            role: findData.role
        },
        "hehehehehe"
    )

    console.log(token, "hehe");

    res.json({
        msg: "done",
        token: token
    })

})

let auth = (req, res, next) => {

    let token = req.headers.authorization;

    console.log(token, "toeknn");

    if (!token) {
        return res.send("kaun hai app...")
    }

    let decode = jwt.verify(token, "hehehehehe")

    console.log(decode, "isse");

    req.user = decode

    next()

}

module.exports = router