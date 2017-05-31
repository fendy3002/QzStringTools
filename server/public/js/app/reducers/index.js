var { combineReducers } = require('redux');
var config = require('./config.js');
var filter = require('./filter.js');
var request = require('./request.js');

var app = combineReducers({
    config: config,
    filter: filter,
    request: request
});

module.exports = app;
