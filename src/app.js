const express = require("express");

const app = express();

app.get("/user", 
        //Route Handlers ---- many can be added but only one response can be sent to the client (next() is used to pass the control to the next route handler)

    (req, res,next) => {
    console.log("first route handler");
    next();
    },
    (req,res,next)=>{
        console.log("second route handler");
        //res.send("response 2!!");
        next();
    },
    (req,res,next)=>{
        console.log("Third route handler");
        //res.send("response 3!!");
        next();
    },
    (req,res,next)=>{
        console.log("Fourth route handler");
        //res.send("response 4!!");
        next();
    },
    (req,res)=>{
        console.log("Fifth route handler");
        res.send("Response 5!!");
    }
)

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777..");
});