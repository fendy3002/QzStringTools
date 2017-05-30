var { combineReducers } = require('redux');
var config = require('./config.js');
var filter = require('./filter.js');

var app = combineReducers({
    config: config,
    filter: filter
});

module.exports = app;
