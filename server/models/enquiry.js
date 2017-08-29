'use strict';

const mongoose = require('mongoose');

var enquirySchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    validate: {
      validator: (val) => {
        let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(val);
      },
      message: '{VALUE} is not a valid email address!'
    },
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  feedback:  {
    type: String,
    required: true
  }
},
{
    timestamps: true
});

module.exports = mongoose.model('Enquiry', enquirySchema, 'enquiries');
