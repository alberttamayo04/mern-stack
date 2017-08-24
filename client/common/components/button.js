'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    let {btnText, btnClass} = this.props.attributes; 
    return(
      <button className={btnClass}>{btnText}</button>
    )
  }
}

Button.propTypes = {
  attributes: PropTypes.object.isRequired
}

Button.defaultProps = {
  btnText: {},
  btnClass: {}
}