import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getReviews, Review} from "./thunks/get-reviews.ts";
const entityAdapter = createEntityAdapter<Review>()

export const reviewSlice = createSlice({
  name: 'review',
  initialState:entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      getReviews.fulfilled, (state, action) => {
        entityAdapter.setAll(state, action.payload)
      })
});
export default reviewSlice.reducer;
