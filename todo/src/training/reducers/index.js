import status from './status';// reducers status
import sort from './sort';// reducers sort
import { combineReducers } from 'redux';
//index là file chính nên gộp 2 thằng lại
//Tìm hiểu thằng combineReducers reducers

const myReducer = combineReducers({
    status, // status : status
    sort//sort : sort { by : by , value : value }
});

export default myReducer;