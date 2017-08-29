'use strict';

const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  author: String,
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true
  },
  content:  {
    type: String,
    required: true
  },
  metaTitle: String,
  metaDescription: String,
  status: String
},
{
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema, 'posts');
