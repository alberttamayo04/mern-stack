'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ItemWrapper from './common/itemwrap'

class Education extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    const educationDetails = this.props.content.map((item, id) => {
      return( 
        <ItemWrapper content={item} id={id} />
        // <div className="row item">
        //   <div className="twelve columns">
        //     <h3>{item.school}</h3>
        //     <p className="info">{item.degree}<span>&bull;</span><em class="date">{item.year}</em></p>
        //     <p>{item.summary}</p>
        //   </div>
        // </div>
      )
    });

    return(
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {educationDetails}
        </div>    
      </div>
    )
  }
}

export default Education;