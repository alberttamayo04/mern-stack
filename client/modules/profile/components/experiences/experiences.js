'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styleCss from './home.css';
import cssModules from 'react-css-modules';

class Home extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return(
      <div>
        <div className="home">
          Home
        </div>
      </div>
    )
  }
}

Home.propTypes = {}

export default cssModules(Home, styleCss, {allowMultiple: true});