import {RootState} from "../../index.tsx";

export const selectReviewModule = (state: RootState) => state.review;
export const selectReviewsIds = (state: RootState) =>
  selectReviewModule(state).ids;
export const selectReviewById = (id:string) => (state:RootState) =>
  selectReviewModule(state).entities[id];