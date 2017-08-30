'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styleCss from './post.css';
import cssModules from 'react-css-modules';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  } 

  componentWillMount() {
    this.posts = this.props.payload.then((res) => {
      return Object.keys(res.data).map(key => res.data[key]);
    })
  }

  render() {
    console.log('this.posts', this.posts);
    const postList = this.posts.map((item, id) => {
      return(
        <div key={id}>
          {item.title}
        </div>  
      )
    });
    return(
      <div className="blog">
        <div className="post-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                {postList}
              </div>  
            </div>  
          </div>  
        </div>  
      </div>
    )
  }
}

Post.propTypes = {
  payload: PropTypes.object.isRequired
};

export default cssModules(Post, styleCss, {allowMultiple: true});
