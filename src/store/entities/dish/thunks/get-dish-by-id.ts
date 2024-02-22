import {AsyncThunkAction, createAsyncThunk} from "@reduxjs/toolkit";
import {
  AsyncThunkConfig, AsyncThunkFulfilledActionCreator,
  AsyncThunkPendingActionCreator,
  AsyncThunkRejectedActionCreator
} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {selectRestaurantMenuById} from "../../restaurant/selector.tsx";

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
  async (restaurantId) => {
    const response  = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    return await response.json();
  },
  {
    condition: (restaurantId, {getState}) => {
      const restaurantDishIds = selectRestaurantMenuById(restaurantId)(getState())
      const dishesIds = selectDishMenuIds(getState());
      return !restaurantDishIds.every((id) => dishesIds.includes(id));
    }
   }
  );
