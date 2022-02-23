/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');

// Project Schema.
const studentSchema = new mongoose.Schema({
  surname: {
    type: String,
    trim: true,
    required: true,
  },
  givenname: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    trim: true,
    required: true,
  },
  dob: {
    type: Date,
    trim: true,
    required: true,
  },
  country: {
    type: String,
    trim: true,
    required: true,
  },
  residence: {
    type: String,
    trim: true,
    required: true,
  },
  nationality: {
    type: String,
    trim: true,
    required: true,
  },

});
module.exports = mongoose.model('StudentReg', studentSchema);
