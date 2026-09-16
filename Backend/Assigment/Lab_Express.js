let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let Student = require("/Users/praptibhandari/Documents/SEM3 webDev/Backend/Assigment/db");

let Lab_Express = express();

Lab_Express.use(express.json());
Lab_Express.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/db").then(() => {
    console.log("db......");
});


Lab_Express.post("/studentData", async (req, res) => {
    let { id, name, age, course } = req.body;
    let student = new Student({id,name,age,course});
    await student.save();
    res.send(student);
    console.log("data added")
});



Lab_Express.get("/students", async (req, res) => {
    let students = await Student.find();
    res.send(students);
});



Lab_Express.get("/studentID/:id", async(req,res)=>{
    let id = req.params.id;
    let studentID = await Student.find({id:id});
    res.send(id);
});



Lab_Express.get("/studentCourse/:course", async (req, res) => {
    let course = req.params.course;
    let students = await Student.find({ course: course });
    res.send(students);
});



Lab_Express.listen(3000, () => {
    console.log("Server running...");
});