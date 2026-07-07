const express = require("express");
const connectDB = require("./config/connection_db.js");

const app = express();

connectDB();

app.listen(3000, () => {
    console.log("Server Running");
});