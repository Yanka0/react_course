import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getUsers, User} from "./thunks/get-users.ts";

const entityAdapter = createEntityAdapter<User>()
export const userSlice = createSlice({
  name: 'user',
  initialState:entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      getUsers.fulfilled, (state, action) => {
        entityAdapter.setAll(state, action.payload)
      })
});
export default userSlice.reducer;
