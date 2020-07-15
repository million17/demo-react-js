import { combineReducers } from 'redux'
import products from './products';
import itemEditing from './itemEditing';



const reducers = combineReducers({
    products,
    itemEditing
});


export default reducers;