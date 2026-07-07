const express = require('express')
const connectDB = require("./config/connection_db.js");
const User = require("./Models/userModel.js")

const app = express()
const PORT = 4000

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Server is running")
})

app.get('/add', async (req, res) => {
    try {
        const user = await User.create({
            name: "Hafeez new",
            age: 23
        })
        res.status(201).json({
            message: "User added",
            user
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Error adding user"
        })
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Error getting users"
        })
    }
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
