const express = require("express");
const app = express();
const dotenv = require('dotenv').config()


app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/" , (req,res) => {
    res.send("Home")
} )

app.get('/message', (req, res) => {
    res.send("Hello world")
    // res.json({ message: "Hello from server!" });
});


app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})

