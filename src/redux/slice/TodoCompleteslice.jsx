import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    value: []
};

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        }   
    }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
