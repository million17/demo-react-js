import * as constants from '../constants/constants';
//Các sự kiện nhứ sắp xếp , toggle
export const status = () => {
    return {
        type: constants.TOGGLE_STATUS
    }
}

export const sort = (sort) => {
    return {
        type: constants.SORT,
        sort// sort : sort
    }
}