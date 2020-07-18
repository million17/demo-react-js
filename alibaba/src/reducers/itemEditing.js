import * as constants from './../commons/constants'

var initState = {};

const itemEditing = (state = initState, action) => {
    switch (action.type) {
        case constants.DETAIL_PRODUCT:
            return action.product
        default:
            return state
    }
}

export default itemEditing;