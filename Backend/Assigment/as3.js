let books = [
   { id: 1, title: "Atomic Habits", author: "James Clear", genre: "self-help", price: 499 },
   { id: 2, title: "Deep Work", author: "Cal Newport", genre: "self-help", price: 450 },
   { id: 3, title: "1984", author: "George Orwell", genre: "fiction", price: 350 },
   { id: 4, title: "Sapiens", author: "Yuval Noah Harari", genre: "history", price: 599 }
];

let express = require("express");
let app = express();
app.use(express.json());

// 1 read all
app.get("/books", (req, res) => {
   res.send(books);
});

// 1 real one
app.get("/books/:id", (req, res) => {
   let id = Number(req.params.id);
   let book = books.find((book) => book.id === id);
   if (!book) {
      return res.status(404).send("book not found");
   }
   res.send(book);
});

// 3
app.get("/search", (req, res) => {
   let genre = req.query.genre;
   let result = books.filter((book) => book.genre === genre);
   res.send(result);
});

// 3
app.post("/books", (req, res) => {
   let newBook = req.body;
   books.push(newBook);
   res.send({
      message: "Book added successfully",
      book: newBook
   });
});


//4

app.put("/books/:id", (req, res) => {
   let id = Number(req.params.id);
   let newPrice = req.body.price;
   let book = books.find((book) => book.id === id);
   if (!book) {
      return res.status(404).send("book not found");
   }
   book.price = newPrice;
   res.send(book);
});


//5
app.delete("/books/:id", (req, res) => {
   let id = Number(req.params.id);
   books = books.filter((book) => book.id !== id);
   res.send("Book deleted successfully");
});