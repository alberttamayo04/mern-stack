'use strict';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
 	username: {
 		type: String,
 		unique: true
 	},
	password: {
		type: String,
	},
	email: {
		type: String,
		validate: {
			validator: (val) => {
			   let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			   return emailRegex.test(val);
		   },
			message: '{VALUE} is not a valid email address!'
		},
		required: true,
		unique: true
	},
	phone: {
 		type: Number
	 },
	role: String
},
{
	timestamps: true
});

module.exports = mongoose.model('User', userSchema, 'users');
