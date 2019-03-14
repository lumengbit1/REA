import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

import './less/style.less';
import Root from './router/Routers';
import RootStore from './stores/RootStore';
require('es6-symbol/implement');

const rootStore = new RootStore();

ReactDOM.render(
    <Provider rootStore={rootStore}>
        <Router>
            <Root />
        </Router>
    </Provider>,
    document.getElementById('root')
);