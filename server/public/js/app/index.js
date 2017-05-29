import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import QzReactReduxHashState from '@fendy3002/react-redux-hash-state';

import sa from 'superagent';
import App from './stringTools/components/App.js';
import reducer from './stringTools/reducers';
import defaultConfig from '../../../../src/config.js';

var renderPage = function(initialState){
    console.log(defaultConfig);
    var state = {
        stringToolsConfig: [],
        filter: Object.assign({
            limit: 20,
            country: null,
            name: null,
            uuid: null,
            page: 0,
            openUuid: null
        }, QzReactReduxHashState.getState('filter'))
    };
    var store = createStore(reducer,
        state,
        applyMiddleware(thunk));
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('content')
    );
};
renderPage([]);
