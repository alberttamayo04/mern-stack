'use strict';

export default(state = [], payload) => {
  switch(payload.type) {
    case 'scroll':
      return [...state, payload.item];
    default:
      return state;
  }
}