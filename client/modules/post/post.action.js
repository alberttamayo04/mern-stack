'use strict';

import axios from 'axios';

export const RETRIEVE_ENTRIES = 'RETRIEVE_ENTRIES';
export const REQUEST_URL = 'http://localhost:7000/post/retrieve/all';

export function retrieveEntries() {
  const request = axios.get(REQUEST_URL);
  return {
    type: RETRIEVE_ENTRIES,
    payload: request
  };
};
