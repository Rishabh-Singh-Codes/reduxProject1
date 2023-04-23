import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Rishabh Singh'},
    {id: '1', name: 'John Doe'},
    {id: '2', name: 'Foo Bar'},

];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;