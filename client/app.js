'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/main';
import Store from './redux/store';

const StoreInstance = Store();
const resume = require('./resume');

ReactDOM.render(
    <Provider store={StoreInstance}>
        <App data={resume} />
    </Provider>,
    document.getElementById('app')
);