'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Banner extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    let {name, summary, links} = this.props.content;
    return(
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>{summary}</h3>
          <hr />
          <ul className="social">
            <li></li>
          </ul>
        </div>
      </div>
    )
  }
}

Banner.propTypes = {
  content: PropTypes.object.isRequired
}

Banner.defaultProps = {
  name: {},
  summary: {},
  links: {}
}