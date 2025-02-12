const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send("Hello! My name is Moksh");
})

app.get('/home', (req,res)=>{
    res.send("Hello! This is home page");
})

app.listen(port);