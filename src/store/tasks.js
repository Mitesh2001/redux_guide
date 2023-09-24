import { createAction, createReducer } from "@reduxjs/toolkit";

export const addTask = createAction('ADD_TASK')

export const removeTask = createAction('REMOVE_TASK')

export const completedTask = createAction('TASK_COMPLETED')

let id = 0;

export default createReducer([],{
    "ADD_TASK" : (state,action) => {
        state.push({
            id : ++id,
            task : action.payload.task,
            completed : false
        })
    },
    "REMOVE_TASK" : (state,action) => state.filter(task => task.id !== action.payload.id),
    "TASK_COMPLETED" :  (state,action) => state.map(task => task.id === action.payload.id ? {
                        ...task,
                        completed : true
                    } : task)
})
