import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addContact: (state, action) => {
            state.push({ id: Date.now(), name: action.payload.name, email: action.payload.email });
        },
        updateContact: (state, action) => {
            const { id, name, email } = action.payload;
            const existingContact = state.find(contact => contact.id === id);
            if (existingContact) {
                existingContact.name = name;
                existingContact.email = email;
            }
        },
        deleteContact: (state, action) => {
            return state.filter(contact => contact.id !== action.payload.id);
        }
    }
});

export const { addContact , updateContact,deleteContact} = todoSlice.actions;

export default todoSlice.reducer;
