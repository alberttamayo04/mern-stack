'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styleCss from './home.css';
import cssModules from 'react-css-modules';

import {retrieveEntries} from '../../../server/services/post';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  } 

  componentDidMount() {
    axios.get('http://localhost:7000/post/retrieve/all').then((res) => {
      const posts = res.data.map(obj => obj.data);
      this.setState({posts}); 
    }).catch((res) => {
      console.log(res);
    });
  }

  render() {
    return(
      <div>
        <div className="home">
        <ul>
          {this.state.posts.map(post =>
            <li key={post._id}>{post.title}</li>
          )}
        </ul>
        </div>
      </div>
    )
  }
}

Home.propTypes = {

}

Home.defaultProps = {
  
}

export default cssModules(Home, styleCss, {allowMultiple: true});