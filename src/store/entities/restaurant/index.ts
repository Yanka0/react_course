import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getRestaurants, RestaurantData} from "./thunks/get-restaurants.ts";

const entityAdapter = createEntityAdapter<RestaurantData>()

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      getRestaurants.fulfilled, (state, action) => {
        entityAdapter.setAll(state, action.payload)
      })
});
export default restaurantSlice.reducer;
