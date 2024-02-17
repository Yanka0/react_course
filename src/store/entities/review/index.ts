import {createSlice} from "@reduxjs/toolkit";
import {normalizedReviews} from "../../../constants/normalizedMock.ts";

export type Review = {
  id: string,
  userId: string,
  text: string,
  rating: number
}
export type ReviewSliceData = {
  entities: { [id: string]: Review },
  ids: string[]
}

const initialState: ReviewSliceData = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review
    return acc
  }, {} as { [id: string]: Review }),
  ids: normalizedReviews.map(({id}) => id),
}
export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {}
});
export default reviewSlice.reducer;
