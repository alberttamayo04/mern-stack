'use strict';

import React, { Component, PropTypes } from 'react';

import Header from './header';
import Sections from './sections';
import Footer from './footer';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  } 

  render() {
    <div>
      <Header  />
      <Sections />
      <Footer />
    </div>  
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired
}

export default App;