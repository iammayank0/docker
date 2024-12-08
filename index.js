const express = require("express");
const app = express();
app.get("/", (req,res)=>{
    res.json([
        {
            id:1,
            name:"Sam",
            age:25
        },
        {
            id:2,
            name:"Mayank",
            age:20
        },
        {
            id:3,
            name:"Ram",
            age:24
        },
        {
            id:4,
            name:"Naam",
            age:25
        },
    ])
})

app.listen(3000, ()=>{
    console.log("app is running on port: 3000")
})