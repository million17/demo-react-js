import * as constants from '../../src/constants/constants';

var data = JSON.parse(localStorage.getItem('tasks'));

var initState = data ? data : [];

var myReducer = (state = initState, action) => {
    switch (action.type) {
        case constants.LIST_ALL:
            return state;
        default: return state;
    }

};

export default myReducer;