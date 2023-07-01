import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddTask, RemoveTask, EditTask } from "../actions";

const TodoList = () => {

    const tasks = useSelector((state) => state.tasks)
    const dispatch = useDispatch()
    const [TaskInput, setTaskInput] = useState('');
    const [EditTaskId, setEditTaskId] = useState('')
    const [EditTaskTitle, setEditTaskTitle] = useState('')

    const handleTaskInput = (e) => {
        if (TaskInput) {
            dispatch(AddTask({ id: Date.now(), title: TaskInput }));
            setTaskInput('');
        }
        e.preventDefault()
    };

    const handleRemoveTask = (taskId) => {
        dispatch(RemoveTask(taskId))
    };

    const handleEditTask = () => {
        // is it nesisary to have this condition?
        if (EditTaskId && EditTaskTitle) {
            dispatch(EditTask(EditTaskId, EditTaskTitle));
            setEditTaskId('');
            setEditTaskTitle('');
        }
    }

    return (
        <div>
            <h1>Todo-LIST</h1>
            <input
                type="text"
                value={TaskInput}
                onChange={(e) => { setTaskInput(e.target.value) }}
            />
            <button onClick={handleTaskInput}>Add</button>
            <ul>
                {
                    tasks.map((task) => (
                        <li key={task.id}>
                            {task.id === EditTaskId ? (
                                <>
                                    <input
                                        type="text"
                                        value={EditTaskTitle}
                                        onChange={(e) => setEditTaskTitle(e.target.value)}
                                    />

                                    <button onClick={handleEditTask}>Update</button>
                                </>
                            ) : (
                                <>
                                    {task.title}{' '}
                                    <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                                    <button onClick={() => setEditTaskId(task.id)}>Edite</button>
                                </>
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
    )


}

export default TodoList;