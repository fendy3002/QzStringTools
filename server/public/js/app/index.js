import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import QzReactReduxHashState from '@fendy3002/react-redux-hash-state';

import sa from 'superagent';
import App from './stringTools/components/App.js';
import Routes from './Routes.js';
import reducer from './stringTools/reducers';
import defaultConfig from '../../../../src/config.js';

var renderPage = function(initialState){
    console.log(defaultConfig);
    var state = {
        config: defaultConfig
    };
    var store = createStore(reducer,
        state,
        applyMiddleware(thunk));
    render(
        <Provider store={store}>
            <Routes />
        </Provider>,
        document.getElementById('content')
    );
};
renderPage([]);
