

export const addTask = (data) => {
    return {type: 'ADD_TASKS', payload: data}
}


export const deleteTask = (idx) => {
    return {type: 'REMOVE_TASK', payload: idx}
}


export const sortTasks = () => {
    return {type: 'SORT_TASKS'}
}


export const resetAll = () => {
    return {type: "RESET_ALL"}
}