import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({ id: Date.now(), name: action.payload.name, description: action.payload.description, completed: false });
        },
        toggleTask: (state, action) => {
            const task = state.find(task => task.id === action.payload.id);
            if (task) {
                task.completed = !task.completed;
            }
        },
        updateTask: (state, action) => {
            const { id, name, description } = action.payload;
            const existingTask = state.find(task => task.id === id);
            if (existingTask) {
                existingTask.name = name;
                existingTask.description = description;
            }
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        }
    }
});

export const { addTask, toggleTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
