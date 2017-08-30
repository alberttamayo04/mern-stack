'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styleCss from './navbar.css';
import cssModules from 'react-css-modules';

class Navbar extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return(
      <div className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            </button>
            <Link className="navbar-brand" to="/">Mark Tamayo</Link>          
          </div>
          <div className="navbar-collapse collapse">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>  
          </div>    
        </div>
      </div>  
    )
  }
}

Navbar.propTypes = {}

export default cssModules(Navbar, styleCss, {allowMultiple: true});