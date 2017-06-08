import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import QzReactReduxHashState from '@fendy3002/react-redux-hash-state';

import sa from 'superagent';
import App from './stringTools/components/App.js';
import Routes from './Routes.js';
import reducer from './reducers';
import defaultConfig from '../../../../src/config.js';

var renderPage = function(initialState){
    var configUrl = localStorage.getItem("QzStringTools.configUrl");
    var additionalConfig = localStorage.getItem("QzStringTools.configAdditional") || '';
    try{
        additionalConfig = JSON.parse(additionalConfig);
    }catch(err){
        additionalConfig = {};
    }

    var state = {
        config: {
            "handler": defaultConfig.handler.concat(additionalConfig.handler)
                .filter(n => n != undefined),
            "command": defaultConfig.command.concat(additionalConfig.command)
                .filter(n => n != undefined),
            "configUrl": configUrl
        },
        filter: {
            selectedCommand: defaultConfig.command[0],
            searchCommandKeyword: "",
            convertedInput: ""
        }
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

    setTimeout(() => {
        var adminLteScript = document.createElement('script');
        adminLteScript.src = "https://adminlte.io/themes/AdminLTE/dist/js/adminlte.min.js";
        adminLteScript.origin = "anonymous";
        document.getElementsByTagName('head')[0].appendChild(adminLteScript);

    }, 1000);
};
renderPage([]);
