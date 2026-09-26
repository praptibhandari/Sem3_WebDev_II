const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/users", (req, res) => {
    const { name, email } = req.body;
    console.log("Name:", name);
    console.log("Email:", email);

    res.json({
        message: "data mil gya ternsion nako lo"
    });
});
app.listen(3000, () => {
    console.log('server running on port 3000')
})