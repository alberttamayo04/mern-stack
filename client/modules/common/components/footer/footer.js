'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styleCss from './footer.css';
import cssModules from 'react-css-modules';

class Footer extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return(
      <div id="footer">
        <div className="container">
          <div className="row">
          </div>    
        </div>
      </div>  
    )
  }
}

Footer.propTypes = {}

export default cssModules(Footer, styleCss, {allowMultiple: true});
