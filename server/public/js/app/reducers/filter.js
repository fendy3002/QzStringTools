var obj = function(state = [], action){
    switch (action.type) {
        case "SET_SELECTED_COMMAND":
            return {
                ...state,
                selectedCommand: action.command
            };
        case 'CONVERT_INPUT':
            return {
                ...state,
                convertedInput: action.result
            };
        default:
            return state;
    };
};

module.exports = obj;
