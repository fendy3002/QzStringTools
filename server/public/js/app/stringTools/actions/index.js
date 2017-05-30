import sa from 'superagent';
import lo from 'lodash';
import StringTool from '../../../../../../src/index.js';

var setSelectedCommand = exports.setSelectedCommand = function(command){
    return {
        type: 'SET_SELECTED_COMMAND',
        command: command
    };
};
var convertInput = exports.convertInput = function(input, command){
    return (dispatch, getState) => {
        var {config} = getState();
        var result = StringTool.convert(input, command, config);
        dispatch({
            type: 'CONVERT_INPUT',
            input: input,
            result: result
        });
    };
};
