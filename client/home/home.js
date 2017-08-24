'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cssModules from 'react-css-modules';
import styleCss from './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    // let {name, summary, links} = this.props.content;
    return(
      <div className="home">
        home
      </div>
    )
  }
}

Home.propTypes = {
  // content: PropTypes.object.isRequired
}

Home.defaultProps = {
  name: {},
  summary: {},
  links: {}
}

export default cssModules(Home, styleCss, { allowMultiple: true });
