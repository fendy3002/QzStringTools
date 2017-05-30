var { combineReducers } = require('redux');
var config = require('./config.js');

var app = combineReducers({
    config: config
});

module.exports = app;
