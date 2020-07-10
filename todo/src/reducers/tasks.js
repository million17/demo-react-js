import * as constants from '../../src/constants/constants';

var s4 = () => {
    //Viết 1 hàm random key
    return Math.floor((1 * Math.random()) * 0x10000).toString(16).substring(1);
}

var generateId = () => {
    //Generate Key để k bị trùng lặp với bất kì phần tử nào
    return s4() + s4() + '-' + s4() + '-' + s4();
}


var data = JSON.parse(localStorage.getItem('tasks'));

var initState = data ? data : [];

var myReducer = (state = initState, action) => {
    switch (action.type) {
        case constants.LIST_ALL:
            return state;
        case constants.ADD_TASK:
            var newTask = {
                id: generateId(),
                txtTaskName: action.task.txtTaskName,
                sltStatus: action.task.sltStatus
            }
            state.push(newTask);
            console.log(`Object `, newTask);
            localStorage.setItem('tasks', JSON.stringify(state));


            return [...state];

        default: return state;
    }

};

export default myReducer;