'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import About from './about';
import Resume from './resume';
import Portfolio from './portfolio';
import Contact from './contact';

class Sections extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    let {profile, resume, portfolio} = this.props.content;
    return(
      <div>
        <About content={profile} />
        <Resume content={resume} />
        <Portfolio content={portfolio} />
        <Contact />
      </div>
    )
  }
}

Sections.propTypes = {
  content: PropTypes.object.isRequired
}

Sections.defaultProps = {
  profile: {},
  resume: {},
  portfolio: {}
}

export default Sections;