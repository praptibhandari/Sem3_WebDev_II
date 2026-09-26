let express = require("express")
let router = express.Router()

let User = require('../models/userdb.js')
let bcryptjs = require('bcryptjs')

router.get('/', (req, res) => {

    res.send("hello ji");

})
router.post('/signUp', async (req, res) => {
    let { name, email, password, role } = req.body;
    let findData = await User.findOne({ email });
    if (findData) {
        return res.send("user jinda haii....");
    }
    let updateddP = await bcryptjs.hash(password, 10);
    let UserInfo = new User({
        name,
        email,
        password: updateddP,
        role: role || "user"
    });

    await UserInfo.save();

    res.send("done.......");

})

module.exports = router