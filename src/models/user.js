const mongoose = require("mongoose");
const validator = require("validator");

//Defining schema
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 50,
        lowercase:true
    },
    lastName : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not a valid email.." + value);
            }
        },
    },
    password : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    gender : {
        type : String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender is not valid!!");
            }
        }
    },
    },
    {
        timestamps : true
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;