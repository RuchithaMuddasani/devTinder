const express = require("express");

const app = express();

app.get("/",(req, res) => {
    res.send("Hello from server!!")
})

app.get("/test", (req, res) => {
    res.send("Test server!!")
})

app.get("/hello", (req, res) => {
    res.send("Hello server!!")
})


app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777..");
});