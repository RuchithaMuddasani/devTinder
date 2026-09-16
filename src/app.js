const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.send("Hello get server!!")
})

app.post("/user", (req, res) => {
    res.send("Hello post server!!")
})

app.put("/user", (req, res) => {
    res.send("Hello put server!!")
})

app.patch("/user", (req, res) => {
    res.send("Hello patch server!!")
})

app.delete("/user", (req, res) => {
    res.send("Hello delete server!!")
})

app.use("/test", (req, res) => {
    res.send("Test server!!")
})

app.listen(7777,()=>{
    console.log("Server is running on port 7777...");
});