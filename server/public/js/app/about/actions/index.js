import sa from 'superagent';

var setReadme = exports.setReadme = function(){
    return (dispatch, getState) => {
        var host = location.protocol + "//" + window.location.host;
        var readmeUrl = host + '/readme';
        sa.get(readmeUrl).end((err, res) => {
            dispatch({
                type: 'SET_README',
                readme: res.text
            });
        });
    };
};
