'use strict';

import {connect} from 'react-redux';
import {retrieveEntries} from './post.action';
import postPresentational from './post';

const Post = connect(null, retrieveEntries)(postPresentational);

export default Post;
