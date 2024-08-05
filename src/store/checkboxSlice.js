import { createSlice } from '@reduxjs/toolkit';

const checkboxSlice = createSlice({
    name: 'checkboxes',
    initialState: [],
    reducers: {
        addCheckbox: (state, action) => {
            state.push({ id: Date.now(), name: action.payload.name, checked: false });
        },
        toggleCheckbox: (state, action) => {
            const checkbox = state.find(cb => cb.id === action.payload.id);
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        },
        deleteCheckbox: (state, action) => {
            return state.filter(cb => cb.id !== action.payload.id);
        }
    }
});

export const { addCheckbox, toggleCheckbox, deleteCheckbox } = checkboxSlice.actions;

export default checkboxSlice.reducer;
