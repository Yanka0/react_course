import {createSlice} from "@reduxjs/toolkit";
import {normalizedRestaurants} from "../../../constants/normalizedMock.ts";

export type Restaurant = {
  id: string,
  name: string,
  menu: string[],
  reviews: string[]
}
export type RestaurantSliceData = {
  entities: { [id: string]: Restaurant },
  ids: string[]
}

const initialState: RestaurantSliceData = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant
    return acc
  }, {} as { [id: string]: Restaurant }),
  ids: normalizedRestaurants.map(({id}) => id),
}
export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {}
});
export default restaurantSlice.reducer;
