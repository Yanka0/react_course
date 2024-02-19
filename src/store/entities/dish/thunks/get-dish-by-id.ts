import {AsyncThunkAction, createAsyncThunk} from "@reduxjs/toolkit";
import {selectDishMenuById} from "../selector.tsx";
import {
  AsyncThunkConfig, AsyncThunkFulfilledActionCreator,
  AsyncThunkPendingActionCreator,
  AsyncThunkRejectedActionCreator
} from "@reduxjs/toolkit/dist/createAsyncThunk";

export type DishMenu = {
  id: string,
  name: string,
  price: number,
  ingredients: string[]
}

export const getDishById: ((arg: string) => AsyncThunkAction<DishMenu, string, AsyncThunkConfig>) & {
  pending: AsyncThunkPendingActionCreator<string, AsyncThunkConfig>;
  rejected: AsyncThunkRejectedActionCreator<string, AsyncThunkConfig>;
  fulfilled: AsyncThunkFulfilledActionCreator<DishMenu, string, AsyncThunkConfig>;
  settled: (action: any) => action is ReturnType<AsyncThunkRejectedActionCreator<string, AsyncThunkConfig> | AsyncThunkFulfilledActionCreator<DishMenu, string, AsyncThunkConfig>>;
  typePrefix: string
} = createAsyncThunk<DishMenu, string>(
  'restaurant/getDishById',
  async (dishId) => {
    const response  = await fetch(`http://localhost:3001/api/dish/${dishId}`);
    return await response.json();
  },
  {
    condition: (dishId, {getState}) => {
      return !selectDishMenuById(dishId)(getState());
    }
  }
  );
