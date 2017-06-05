import sa from 'superagent';

var setConfigUrl = exports.setConfigUrl = function(url){
    return (dispatch, getState) => {
    	localStorage.setItem('QzStringTools.configUrl', action.url);
        sa.get(url).end((err, res) => {
    		localStorage.setItem('QzStringTools.configAdditional', res.body);
            dispatch({
                type: 'SET_ADDITIONAL_CONFIG',
                config: res.body
            });
        });
    };
};

    		