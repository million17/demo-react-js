import { createStore } from 'redux';

var initState = {
    status: false,
    sort: {
        by: 'name',
        value: 1
    }
}

var myReducer = (state = initState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state.status = !state.status;
        return state;
    }
    if (action.type === 'SORT') {
        console.log(`action : `, action);
        var { by, value } = action.sort;
        var { status } = state;
        return {
            status : status,
            sort : {
                by : by,
                value : value
            }
        }
    }
    return state;
}

const store = createStore(myReducer);
// Thực hiện thay đổi status
console.log(`Default `, store.getState());
var action = { type: 'TOGGLE_STATUS' };
store.dispatch(action);
console.log(`Toggle_status :  `, store.getState());
//Thực hiện công việc sắp xếp tên từ Z - A defalt là A - Z
var actionSort = {
    type: 'SORT',
    sort: {
        by: 'name',
        value: -1,
    }
};
store.dispatch(actionSort);

console.log(`Sort : `, store.getState());