import * as constants from '../../src/constants/constants';

var s4 = () => {
    //Viết 1 hàm random key
    return Math.floor((1 * Math.random()) * 0x10000).toString(16).substring(1);
}

var generateId = () => {
    //Generate Key để k bị trùng lặp với bất kì phần tử nào
    return s4() + s4() + '-' + s4() + '-' + s4();
}
var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            // console.log(index);  
            result = index;
        }
    });
    return result;

}

var data = JSON.parse(localStorage.getItem('tasks'));

var initState = data ? data : [];

var myReducer = (state = initState, action) => {
    var id = '';
    var index = -1;
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

        case constants.UPDATE_STATUS://b3 : Vào đây để xem gọi trường hợp nào để xử lý 
            id = action.id;
            index = findIndex(state, id);
            // state[index].sltStatus = !state[index].sltStatus; 
            state[index] = {
                ...state[index],
                sltStatus: !state[index].sltStatus
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case constants.DELETE:
            id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        default: return state;
    }

};

export default myReducer;