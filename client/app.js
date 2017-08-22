'use strict';

// core modules
import React from 'react';
import ReactDOM from 'react-dom';

// local imports
import App from './components/main';

const cv = require('./cv');

ReactDOM.render(
    <App data={cv} />, 
    document.getElementById('app')
);