'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Layout extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <div className="test">
            {this.props.children}
          </div>  
      </div>
    )
  }
}

Layout.propTypes = {
  // children: PropTypes.object.isRequired
}

Layout.defaultProps = {
  // links: {},
  // banner: {}
}

export default Layout;