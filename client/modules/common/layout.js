'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Navbar from './components/navbar';
import Footer from './components/footer';

class Layout extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    console.log('props:', this.props); 
    return (
      <div>
          <Navbar />
          <div className="container">
            {this.props.children}
          </div>  
          <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.array.isRequired
}

export default Layout;