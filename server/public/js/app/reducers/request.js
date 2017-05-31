var obj = function(state = [], action){
    switch (action.type) {
        case "SET_README":
            return {
                ...state,
                readme: action.readme
            };
        default:
            return state;
    };
};

module.exports = obj;
