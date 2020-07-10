import * as constants from '../constants/constants';


var initState = {};

var myReducer = (state = initState, action) => {
    switch (action.type) {
        case constants.EDIT_TASK:
            return state;
        default: return state
    }

}

export default myReducer;