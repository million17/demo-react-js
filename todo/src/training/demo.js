import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);
// Thực hiện thay đổi status
console.log(`Default `, store.getState());
store.dispatch(status());
console.log(`Toggle_status :  `, store.getState());
//Thực hiện công việc sắp xếp tên từ Z - A defalt là A - Z
store.dispatch(sort({
    by: 'name',
    value: -1
}));

console.log(`Sort : `, store.getState());