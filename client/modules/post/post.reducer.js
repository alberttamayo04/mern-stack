'use strict';

import {RETRIEVE_ENTRIES} from './post.action';

const INITIAL_STATE = {
  entries: []
};

export default function reviewsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case RETRIEVE_ENTRIES:
      return [
        ...state, action.payload.data
      ]
    default:
      return state;
  }
}