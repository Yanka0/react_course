import {AsyncThunkAction, createAsyncThunk} from "@reduxjs/toolkit";
import {selectReviewsByRestaurantId} from "../selector.tsx";
import {
  AsyncThunkConfig, AsyncThunkFulfilledActionCreator,
  AsyncThunkPendingActionCreator,
  AsyncThunkRejectedActionCreator
} from "@reduxjs/toolkit/dist/createAsyncThunk";

export type RestaurantReviews = {
  id: string
  reviews : Review[]
}

export type Review = {
  id: string,
  userId: string,
  text: string,
  rating: number
}

export const getReviewsByRestaurantId: ((arg: string) => AsyncThunkAction<RestaurantReviews, string, AsyncThunkConfig>) & {
  pending: AsyncThunkPendingActionCreator<string, AsyncThunkConfig>;
  rejected: AsyncThunkRejectedActionCreator<string, AsyncThunkConfig>;
  fulfilled: AsyncThunkFulfilledActionCreator<RestaurantReviews, string, AsyncThunkConfig>;
  settled: (action: any) => action is ReturnType<AsyncThunkRejectedActionCreator<string, AsyncThunkConfig> | AsyncThunkFulfilledActionCreator<RestaurantReviews, string, AsyncThunkConfig>>;
  typePrefix: string
} = createAsyncThunk<RestaurantReviews, string>(
  'restaurant/getReviewByRestaurantId',
  async (restaurantId)=> {
    const response = await fetch (`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    const reviews : Review[] = await response.json()
    return {id: restaurantId, reviews: reviews};
  },
  {
    condition: (restaurantId, {getState}) => {
      return !selectReviewsByRestaurantId(restaurantId)(getState())
    }
  });
