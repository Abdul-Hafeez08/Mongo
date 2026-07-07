const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    name: String,
    age: Number

},
    {
        versionKey: false
    }
)

module.exports = mongoose.model("Student", userModel, "students")
