'use strict';

import React, { Component } from 'react';

import About from './about';
import Education from './education';
import Skills from './skills';
import Works from './works';
import Contact from './contact';

class Sections extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    <div>
      <About />
      <Work />
      <Education />
      <Skills />
      <Contact />
    </div>
  }
}

export default Sections;