import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const Main = require('./components/main');

const Routes = {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/about" component={Users} />
            <Route path="/contact" component={Contact} />
        </Router>
    );
}

module.exports = Routes;