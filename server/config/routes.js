'use strict';

const Post = require('../models/post');

// list routes
module.exports = (app) => {

  // load react application from client/dist/index.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });

  // retrieve all entries from database
  app.get('/post/retrieve/all', (req, res) => {
    Post.find({}, (err, result) => {
      if(err) throw err;
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(result, null, 4));
    });
  });

  // retrieve an entry by ID
  app.get('/post/retrieve/:_id', (req, res) => {
    Post.findOne({_id: req.params._id}, (err, result) => {
      if(err) throw err;
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(result, null, 4));
    });
  });
  
}