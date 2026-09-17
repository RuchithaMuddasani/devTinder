const express = require("express");

const app = express();

const { adminAuth } = require("./middlewares/auth.js");

// Apply admin authentication middleware to all /admin routes
app.use("/admin", adminAuth);


// Admin route 1
app.get("/admin/getAllData", (req, res) => {
    res.send("Authorized user");
});


// Admin route 2
app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a user");
});


// Start server
app.listen(7777, () => {
    console.log("Server is running on port 7777");
});