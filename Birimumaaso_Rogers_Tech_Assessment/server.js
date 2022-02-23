const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


const regRoute = require("./routes/reg-route");

//!==== Environment Variables ====
require('dotenv').config();

//!==== Instanciation ====
const app = express();
const port = process.env.port || 5000

//!==== Mongoose Connection ====
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection
    .on("open", () => {
        console.log("Mongoose conection is open")
    })
    .on("error", err => {
        console.log(`Connection error: ${err.message}`)
    })

//!==== Configurations/Settings ====
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//!==== Middleware ====
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/public/images', express.static(__dirname + '/public/images'))

//! Routes
app.use("/", regRoute);

//*Error Routes
app.get("*", (req, res) => {
    res.status(404).send('Page Does Not Exist')
});

//*==== Server start ====
app.listen(port, () => {
    console.log(`We are now live on ${port}`);
})

module.exports = app //For Testing