import {createSlice} from "@reduxjs/toolkit";
import {normalizedDishes} from "../../../constants/normalizedMock.ts";

export type DishMenu = {
  id: string,
  name: string,
  price: number,
  ingredients: string[]
}
export type DishMenuSliceData = {
  entities: { [id: string]: DishMenu },
  ids: string[]
}

const initialState: DishMenuSliceData = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish
    return acc
  }, {} as { [id: string]: DishMenu }),
  ids: normalizedDishes.map(({id}) => id),
}
export const dishMenuSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {}
});
export default dishMenuSlice.reducer;
