// // Question 1

// let os = require("os");
// console.log("Platform:", os.platform());
// console.log("CPU Architecture:", os.arch());

// console.log(
//    "Total RAM:",
//    (os.totalmem() / 1024 ** 3).toFixed(2),
//    "GB"
// );

// console.log(
//    "Free RAM:",
//    (os.freemem() / 1024 ** 3).toFixed(2),
//    "GB"
// );

// console.log(
//    "Uptime:",
//    (os.uptime() / 3600).toFixed(2),
//    "hours"
// );



// // Question 3

// let http = require("http");
// let server = http.createServer((req, res) => {

//    console.log("URL:", req.url);
//    console.log("Method:", req.method);

//    res.end("Welcome to my server");

// });
// server.listen(3000, () => {
//    console.log("Server running on port 3000");
// });



// // Question 4

// let http = require("http");

// let server = http.createServer((req, res) => {

//    if (req.url === "/") {
//       res.end("Home Page");
//    }

//    else if (req.url === "/products") {
//       res.end("Our Products");
//    }

//    else if (req.url === "/login") {
//       res.end("Login Page");
//    }

//    else {
//       res.statusCode = 404;
//       res.end("Page Not Found");
//    }

// });

// server.listen(3000, () => {
//    console.log("Server running on port 3000");
// });



// // Question 5

// let express = require("express");

// let app = express();

// app.get("/", (req, res) => {
//    res.send("Home Page");
// });

// app.get("/products", (req, res) => {
//    res.send("Our Products");
// });

// app.get("/login", (req, res) => {
//    res.send("Login Page");
// });

// app.get("/contact", (req, res) => {
//    res.send("Contact Page");
// });

// app.listen(3000, () => {
//    console.log("Server running on port 3000");
// });


// Question 5

let express = require("express");

let app = express();

app.use((req, res, next) => {
   console.log(req.method, req.url);
   next();
});


app.get("/", (req, res) => {
   res.send("Home Page");
});

app.get("/products", (req, res) => {
   res.send("Our Products");
});

app.get("/login", (req, res) => {
   res.send("Login Page");
});

app.get("/contact", (req, res) => {
   res.send("Contact Page");
});


app.listen(3000, () => {
   console.log("Server running on port 3000");
});