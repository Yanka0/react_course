import {createAsyncThunk} from "@reduxjs/toolkit";

export type DishMenu = {
  id: string,
  name: string,
  price: number,
  ingredients: string[]
}

export const getDishes = createAsyncThunk<DishMenu[], void>(
  'restaurant/getDishes',
  async () => {
    const response = await fetch('http://localhost:3001/api/dishes');
    return await response.json();
  });
