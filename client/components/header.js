'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Menu from './navigation';
import Banner from './banner';

export default class Header extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    let banner = this.props.content; 
    let links = {};
    return(
      <div>
        <header id="home">
          <Menu content={links}/>
          <Banner content={banner} />
        </header>  
      </div>
    )
  }
}

Header.propTypes = {
  content: PropTypes.object.isRequired
}

Header.defaultProps = {
  links: {},
  banner: {}
}