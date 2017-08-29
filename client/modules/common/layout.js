'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Navbar from './components/navbar';

class Layout extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <div>
          <Navbar />
          <div className="container">
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