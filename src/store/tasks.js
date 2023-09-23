const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const TASK_COMPLETED = 'TASK_COMPLETED';

export const addTask = task => ({ type : ADD_TASK, payload : {task} });

export const removeTask = id => ({ type : REMOVE_TASK, payload : {id} });

export const completeTask = id => ({ type : TASK_COMPLETED, payload : {id} });

let id = 0;

export default function reducer(state=[],action) {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id : ++id,
                    task : action.payload.task,
                    completed : false
                }
            ]

        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id)

        case TASK_COMPLETED:
            return state.map(task => task.id === action.payload.id ? {
                ...task,
                completed : true
            } : task)

        default:
            return state
    }
}