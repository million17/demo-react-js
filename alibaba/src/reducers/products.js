import * as constants from './../commons/constants'
var initState = [];

const products = (state = initState, action) => {
    switch (action.type) {
        case constants.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        default: return [...state];
    }
}

export default products;