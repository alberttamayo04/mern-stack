'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './home';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Home} />
    </div> 
  </BrowserRouter>
)

export default Routes;