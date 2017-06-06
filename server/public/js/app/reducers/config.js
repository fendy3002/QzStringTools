var defaultConfig = require('../../../../../src/config.js').default;
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
    			"handler": defaultConfig.handler.concat(action.config.handler)
                    .filter(n => n != undefined),
    			"command": defaultConfig.command.concat(action.config.command)
                    .filter(n => n != undefined)
    		};
        default:
            return state;
    };
};

module.exports = config;
