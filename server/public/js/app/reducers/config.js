var defaultConfig = require('../../../../../src/config.js');
var config = function(state = [], action){
    switch (action.type) {
    	case 'SET_CONFIG_URL':
    		return {
    			...state,
    			'configUrl': action.url
			};
    	case 'SET_ADDITIONAL_CONFIG':
    		return {
    			...state,
    			"handler": {
    				...defaultConfig.handler,
    				...action.config.handler
    			},
    			"command": {
    				...defaultConfig.command,
    				...action.config.command
    			}
    		};
        default:
            return state;
    };
};

module.exports = config;
