import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  AsyncThunkConfig, AsyncThunkFulfilledActionCreator,
  AsyncThunkPendingActionCreator,
  AsyncThunkRejectedActionCreator,
  AsyncThunkAction
} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {RootState} from "../../../index.tsx";
import {selectRestaurantReviewIds} from "../../restaurant/selector.tsx";
import {selectReviewsIds} from "../selector.tsx";


export type Review = {
  id: string,
  userId: string,
  text: string,
  rating: number
}

export const getReviewsByRestaurantId : ((arg: string) => AsyncThunkAction<Review[], string, AsyncThunkConfig>) & {
  pending: AsyncThunkPendingActionCreator<string, AsyncThunkConfig>;
  rejected: AsyncThunkRejectedActionCreator<string, AsyncThunkConfig>;
  fulfilled: AsyncThunkFulfilledActionCreator<Review[], string, AsyncThunkConfig>;
  settled: (action: any) => action is ReturnType<AsyncThunkRejectedActionCreator<string, AsyncThunkConfig> | AsyncThunkFulfilledActionCreator<Review[], string, AsyncThunkConfig>>;
  typePrefix: string
}  = createAsyncThunk<Review[], string, {state: RootState}>(
  'restaurant/getReviewByRestaurantId',
  async (restaurantId)=> {
    const response = await fetch (`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    const reviews : Review[] = await response.json()
    return reviews;
  },
  {
    condition: (restaurantId, {getState}) => {
      const restaurantReviewsIds = selectRestaurantReviewIds(restaurantId)(getState())
      const reviewsIds = selectReviewsIds(getState());
      return !restaurantReviewsIds.every((id) => reviewsIds.includes(id));
    }}
  );
