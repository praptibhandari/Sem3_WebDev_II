
// q14

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());


// JWT Authentication Middleware
let auth = (req, res, next) => {

    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).send("Unauthorized");
    }

    let decode = jwt.verify(token, "hehehehehe");

    req.user = decode;

    next();
};


// Student Authorization
let studentCheck = (req, res, next) => {

    if (req.user.role !== "student") {
        return res.status(403).send("Only students can access dashboard");
    }

    next();
};


// Protected Dashboard
app.get("/dashboard", auth, studentCheck, (req, res) => {

    res.send("Welcome to Student Dashboard");

});


app.listen(3000);


//q 15
let adminCheck = (req, res, next) => {

    if (req.user.role !== "admin") {
        return res.status(403).send("Only admin can access");
    }

    next();
};