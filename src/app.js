const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
app.use(express.json());

const {validateSignUp} = require("./utils/validation");
const bcrypt = require("bcrypt");

//Login 
app.post("/login", async (req,res) => {
    try{

        const{email, password} = req.body;

        //check if user exists in the DB
        const user = await User.findOne({email});
        if(!user){
            throw new Error("Invalid Credentials");
        }

        //creating valid password
        const isValidPassword = await bcrypt.compare(password, user.password);

        //check if password is valid
        if(isValidPassword){
            res.send("Login Successfull!!");
        }
        else{
            throw new Error("Invalid Credentials");
        }
    }
    catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
})

//To post data into DB
app.post("/signup", async (req,res)=>{

    try{
    //validate the user
    validateSignUp(req); 

    //Encrypt the password
    const {firstName, lastName, email, password} = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    //creating a new instance of the User Model 
    const user = new User({
        firstName,
        lastName,
        email,
        password : passwordHash
    });

    await user.save();
    res.send("User added successfully!!")
    }catch(err){
        res.status(400).send("ERROR: "  + err.message);
    }
}) 

//Feed API- GET /FEED- to get all the users from the DB
app.get("/feed", async (req,res)=>{
    try{
        const users = await User.find({});
        res.send(users);
    }
    catch(err){
        res.status(400).send("Users Not Found!!");
    }
})

//Get user by Email
app.get("/user", async (req,res)=>{
    const userEmail = req.body.email;
    
    try{
        const users = await User.findOne();
        if(!users){
        res.status(400).send("something went wrong!!");
        }
        else{
            res.send(users);
        }
    }catch(err){
        res.status(400).send("User Not found!!")
    }
})

//Delete user from DB by Id
app.delete("/user", async (req,res) =>{
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete(userId);
        res.send("User deleted successfullyy!!");
    }
    catch(err){
        res.status(400).send("Something went wrong!!");
    }
})

//To update data of the user
app.patch("/user", async (req,res)=>{
    const userId = req.body.userId;
    const data = req.body;

    try{
        await User.findOneAndUpdate({_id: userId}, data);
        res.send("updated user successfully!!")
    }
    catch(err){
        res.status(400).send("cannot update user..")
    }
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
        console.log(err);
    })

    
