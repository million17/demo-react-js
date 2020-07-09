import * as constants from '../../src/constants/constants'
export const listAll = () => {
    return {
        type: constants.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: constants.ADD_TASK,
        task
    }
}