const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

//!=== Model ===
const StudentModel = require("../models/regModel");

const router = express.Router();

//* Route to get the Student Registration Page
router.get("/registration", (req, res) => {
    res.render("studentreg");
    res.json(StudentModel);
});

//! Instanciation of storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage })

//* Route to post data from the Student Registration page
router.post("/registration", upload.single('file'), async(req, res) => {
    console.log(req.body)
    res.json({
        status: "success",
        result: "Welcome To Testing API"
    });
    try {
        const newStudentModel = new StudentModel(req.body);
        newStudentModel.file = req.file.path;
        console.log(newStudentModel);
        await newStudentModel.save();
        res.redirect('/registration')
    } catch (err) {
        res.status(400).send("Sorry, Data was not sent to Database");
    }

});

module.exports = router;