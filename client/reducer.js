import {combineReducers} from 'redux';
import post from './modules/post/post.reducer';

const rootReducer = combineReducers({
  post
});

export default rootReducer;