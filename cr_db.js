const express = require('express')
const connectDB = require("./config/connection_db.js");
const User = require("./Models/userModel.js")
const app = express()

connectDB();
const add = async (req, res) => {
    try {
        await User.create({
            name: "Ali",
            age: 23
        })
        // res.send("User Added");
    } catch (error) {
        console.log(error)
        // res.status(500).send("Error");
    }
}
// app.listen(4000)
add()

const getuser = async () => {
    try {
        const users = User.find()
        console.log(users)
    } catch (error) {

    }
}
getuser()