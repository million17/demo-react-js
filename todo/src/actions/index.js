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


export const toggleForm = () => {
    return {
        type : constants.TOGGLE_FORM,
    }
}

export const openForm = () => {
    return {
        type : constants.OPEN_FORM,
    }
}

export const closeForm = () => {
    return {
        type : constants.CLOSE_FORM,
    }
}