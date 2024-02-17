import {createAsyncThunk } from "@reduxjs/toolkit";

export type Review = {
  id: string,
  userId: string,
  text: string,
  rating: number
}

export const getReviews = createAsyncThunk<Review[], void>(
  'restaurant/getReview',
  async ()=> {
    const response = await fetch ('http://localhost:3001/api/reviews');
    return await response.json();
  });
