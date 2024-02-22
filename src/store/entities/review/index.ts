import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getReviewsByRestaurantId, Review} from "./thunks/get-reviews-by-restaurant-id.ts";
const entityAdapter = createEntityAdapter<Review>()

export const reviewSlice = createSlice({
  name: 'review',
  initialState:entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByRestaurantId.fulfilled, (state, action) => {
        entityAdapter.setMany(state, action.payload)
      })
});
export default reviewSlice.reducer;
