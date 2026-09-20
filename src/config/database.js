const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect(
        "mongodb+srv://ruchithamuddasani123_db_user:slidNWXlMc6uq6MU@namastenode.c6detv2.mongodb.net/devTinder"
    );
}

module.exports = connectDB;


