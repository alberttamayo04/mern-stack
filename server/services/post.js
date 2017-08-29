'use strict';

const axios = require('axios');

// retrieve blog entries
exports.retrieveEntries = () => {
  return axios.get('http://localhost:7000/post/retrieve/all').then((res) => {
    console.log('retrieveEntries:', res.data);
    return res.data; 
  }).catch((res) => {
    console.log(res);
  });
};