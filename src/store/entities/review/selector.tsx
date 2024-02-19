import {RootState} from "../../index.tsx";

export const selectReviewModule = (state: RootState) => state.review;
export const selectReviewsByRestaurantId = (restaurantId:string) => (state:RootState) =>
  selectReviewModule(state).entities[restaurantId]?.reviews;