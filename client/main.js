'use strict';

import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise';

// local imports
import Main from './modules/common/layout';
import Home from './modules/home';
import About from './modules/profile';
import Post from './modules/post';

// import redux reducer
import rootReducer from './reducer';

// create redux store
const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware)
);

render(
  <Provider store={store}>
    <Router>
      <Main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/blog" component={Post}/> 
      </Main>
    </Router>
  </Provider>,
  document.getElementById('app')
);