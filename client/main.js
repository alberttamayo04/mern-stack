'use strict';

// core modules
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

// ui-components
import Main from './modules/common/layout';

// sections
import Home from './modules/home';
import About from './modules/profile';

render(
  <Router>
    <Main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About}/> 
    </Main>
  </Router>,
  document.getElementById('app')
);