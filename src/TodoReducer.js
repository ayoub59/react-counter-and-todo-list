
const initialState = {
    tasks: [],
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                // is the state in this example just a variable
                ...state,
                // what do we mean by payload, what does it have to do with the action
                tasks: [...state.tasks, action.payload]
            };

        case "REMOVE_TASK":
            // when we say retuen do we retuen it to the state/store or what?
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            };

        case "EDIT_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.taskId) {
                        return {
                            ...task,
                            title: action.payload.newTitle

                        }
                    }
                    return task;
                }),
            };
        default:
            return state;

    }
}

export default TodoReducer;