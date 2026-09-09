// //Question 1

// let fs = require("fs");

// fs.writeFileSync("welcome.txt", "Welcome to Backend Development!");

// console.log("File created successfully");




// // Question 2

// let fs = require("fs");
// let data = fs.readFileSync("welcome.txt", "utf-8");
// console.log(data);



// //Question 3. CRUD

// let fs = require("fs");
// fs.writeFileSync("tasks.txt", "Task 1: Learn Node");
// fs.appendFileSync("tasks.txt", "\nTask 2: Learn fs module");
// let data = fs.readFileSync("tasks.txt", "utf-8");
// console.log(data);



// // Question 4

// let fs = require("fs");
// fs.writeFileSync("demo.txt", "AAA");
// let data1 = fs.readFileSync("demo.txt", "utf-8");
// console.log(data1);
// fs.writeFileSync("demo.txt", "BBB");
// let data2 = fs.readFileSync("demo.txt", "utf-8");
// console.log(data2);
// fs.appendFileSync("demo.txt", "CCC");
// let data3 = fs.readFileSync("demo.txt", "utf-8");
// console.log(data3);


// // Question 5

// let fs = require("fs");
// fs.mkdirSync("myProject");
// fs.writeFileSync(
//    "myProject/info.txt",
//    "This is inside a folder"
// );
// let files = fs.readdirSync("myProject");
// console.log(files);


// // Question 6

// let fs = require("fs");
// console.log("1. Start");
// fs.readFile("welcome.txt", "utf-8", (err, data) => {
//    console.log(data);
// });
// console.log("3. End");


// Question 7

let fs = require("fs");

// 1. Create folder
fs.mkdirSync("data");

// 2. Create file
fs.writeFileSync(
   "data/notes.txt",
   "Note 1: Backend is fun"
);

// 3. Append notes
fs.appendFileSync(
   "data/notes.txt",
   "\nNote 2: fs module learned"
);

fs.appendFileSync(
   "data/notes.txt",
   "\nNote 3: CRUD done"
);

// 4. Read notes
let notes = fs.readFileSync(
   "data/notes.txt",
   "utf-8"
);

console.log(notes);

// 5. Delete folder and everything inside
fs.rmSync("data", { recursive: true });

console.log("Data folder deleted");
