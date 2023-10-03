import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const taskSlice = createSlice({
    name : "tasks",
    initialState : [],
    reducers:{
        addTask : (state,action) => {
            state.push({
                id : ++id,
                task : action.payload.task,
                completed : false
            })
        },
        removeTask : (state,action) => state.filter(task => task.id !== action.payload.id),
        completedTask : (state,action) => state.map(task => task.id === action.payload.id ? {
            ...task,
            completed : true
        } : task)
    }
})

export const { addTask,removeTask, completedTask } = taskSlice.actions;
export default taskSlice.reducer
