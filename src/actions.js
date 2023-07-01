
export const AddTask = (task) => {
    return {
        type: "ADD_TASK",
        payload: task
    }
}

export const RemoveTask = (taskId) => {
    return {
        type: "REMOVE_TASK",
        payload: taskId
    }
}

export const EditTask = (taskId, newTitle) => {
    return {
        type: "EDIT_TASK",
        payload: { taskId, newTitle }
    }
}