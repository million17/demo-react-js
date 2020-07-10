import * as constants from '../../src/constants/constants';


var initState = false;

var myReducer = (state = initState, action) => {
    switch (action.type) {
        case constants.TOGGLE_FORM:
            return !state;
        case constants.CLOSE_FORM:
            state = false;
            return state;
        case constants.OPEN_FORM:
            state = true;
            return state 
        default: return state
    }

}

export default myReducer;