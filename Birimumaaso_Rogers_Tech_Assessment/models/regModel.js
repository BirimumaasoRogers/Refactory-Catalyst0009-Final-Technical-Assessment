const mongoose = require('mongoose');

const studentRegSchema = new mongoose.Schema({
    surname: {
        type: String,
        trim: true,
        required: true
    },
    givenname: {
        type: String,
        trim: true,
        required: true
    },
    file: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    residence: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    }
})

// Sets the createdAt parameter equal to the current time
studentRegSchema.pre('save', next => {
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

module.exports = mongoose.model("studentReg", studentRegSchema);