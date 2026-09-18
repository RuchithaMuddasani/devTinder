const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req,res)=>{

    const user = new User(req.body);

    await user.save();
    res.send("User added successfully!!")
}) 

connectDB()
    .then(()=>{
        console.log("Database connection established!!");
        // Start server
        app.listen(7777, () => {
            console.log("Server is running on port 7777");
        });
    })
    .catch(err => {
        console.log("Database is not connected!!");
    })

    
