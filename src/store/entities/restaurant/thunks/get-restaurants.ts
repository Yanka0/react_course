import {createAsyncThunk} from "@reduxjs/toolkit";

export type RestaurantData = {
  id: string,
  name: string,
  menu: string[],
  reviews: string[]
}
export const getRestaurants = createAsyncThunk<RestaurantData[], void>(
  'restaurant/getRestaurant',
  async () => {
    const response = await fetch('http://localhost:3001/api/restaurants');
    return await response.json();
  });
