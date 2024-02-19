import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getReviewsByRestaurantId, RestaurantReviews} from "./thunks/get-reviews-by-restaurant-id.ts";
const entityAdapter = createEntityAdapter<RestaurantReviews>()

export const reviewSlice = createSlice({
  name: 'review',
  initialState:entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByRestaurantId.fulfilled, (state, action) => {
        entityAdapter.setOne(state, action.payload)
      })
});
export default reviewSlice.reducer;
