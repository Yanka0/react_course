import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {DishMenu, getDishById} from "./thunks/get-dish-by-id.ts";
const entityAdapter = createEntityAdapter<DishMenu>( )


export const dishMenuSlice = createSlice({
  name: 'dish',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      getDishById.fulfilled, (state, action) => {
        entityAdapter.setOne(state, action.payload)
      })
});
export default dishMenuSlice.reducer;
