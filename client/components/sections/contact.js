'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
    console.log(this); 
  }

  render() {
    return(
      <h1 onClick={this.handleClick}>Contacts</h1>
    )
  }
}

export default Contact;