import sa from 'superagent';

var setConfigUrl = exports.setConfigUrl = function(url){
    return (dispatch, getState) => {
    	localStorage.setItem('QzStringTools.configUrl', url);
        if(url){
            sa.get(url).end((err, res) => {
                var additionalConfig = JSON.parse(res.text);
                localStorage.setItem('QzStringTools.configAdditional', res.text);
                dispatch({
                    type: 'SET_ADDITIONAL_CONFIG',
                    config: additionalConfig || {}
                });
            });
        }
        else{
            localStorage.setItem('QzStringTools.configAdditional', null);
            dispatch({
                type: 'SET_ADDITIONAL_CONFIG',
                config: {}
            });
        }
    };
};

    		