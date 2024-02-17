import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {DishMenu, getDishes} from "./thunks/get-dishes.ts";
const entityAdapter = createEntityAdapter<DishMenu>()


export const dishMenuSlice = createSlice({
  name: 'dish',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      getDishes.fulfilled, (state, action) => {
        entityAdapter.setAll(state, action.payload)
      })
});
export default dishMenuSlice.reducer;
