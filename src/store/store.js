import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import taskReducer from './taskSlice';
import checkboxReducer from './checkboxSlice';

const store = configureStore({
    reducer: {
        todo: todoReducer,
        tasks: taskReducer,
        checkboxes: checkboxReducer
    }
});

export default store;
