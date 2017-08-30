'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styleCss from './profile.css';
import cssModules from 'react-css-modules';

class Profile extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return(
      <div className="profile">
        About
      </div>
    )
  }
}

Profile.propTypes = {}

export default cssModules(Profile, styleCss, {allowMultiple: true});