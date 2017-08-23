'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Work from './work';
import Education from './education';
import Skills from './skills';

export default class Resume extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'props');
  } 

  render() {
    let {workingExperience, education, skills} = this.props.content;
    return(
      <section id="resume">
        <Work content={workingExperience} />
        <Education content={education} />
        <Skills content={skills} />
      </section>
    )
  }
}

Resume.propTypes = {
  content: PropTypes.object.isRequired
}

Resume.defaultProps = {
  education: {},
  workingExperience: {},
  skills: {},
}