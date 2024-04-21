const express = require("express");
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: "Sanjid", email: "sanjid@gmail.com"},
    {id: 2, name: "Rafi", email: "rafi@gmail.com"},
    {id: 3, name: "Galib", email: "galib@gmail.com"},
]

app.get("/", (req, res)=>{
    res.send("Users Management server is running.");
})

app.get("/users", (req, res)=>{
    res.send(users);
})

app.post("/users", (req, res)=>{
    console.log("hitting POST");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})