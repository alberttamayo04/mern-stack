'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Sections from './sections';
import Footer from './footer';

export default class Main extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    let {basics, sections} = this.props.data;
    return(
      <div>
        <Header content={basics} />
        <Sections content={sections} />
        <Footer content={basics} />
      </div>  
    )
  }
}

Main.propTypes = {
  data: PropTypes.object.isRequired
}

Main.defaultProps = {
  profile: {},
  sections: {}
}