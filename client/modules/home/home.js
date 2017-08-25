'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styleCss from './home.css';
import cssModules from 'react-css-modules';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  } 

  componentDidMount() {
    axios.get('http://www.reddit.com/r/reactjs.json')
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({posts});
      });
  }

  render() {
    return(
      <div>
        <div className="home">
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
        </div>
      </div>
    )
  }
}

Home.propTypes = {}

Home.defaultProps = {}

export default cssModules(Home, styleCss, { allowMultiple: true });