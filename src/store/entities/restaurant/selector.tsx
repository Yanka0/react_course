import {RootState} from "../../index.tsx";

export const selectRestaurantModule = (state: RootState) => state.restaurant;
export const selectRestaurantsWithIds = (state: RootState) => state.restaurant.entities;
export const selectRestaurantIds = (state: RootState) => selectRestaurantModule(state).ids;
export const selectRestaurantById = (id:string) => (state:RootState) =>
  selectRestaurantModule(state).entities[id];
export const selectRestaurantReviewIds = (id:string) => (state:RootState) =>
  selectRestaurantById(id)(state)?.reviews;
export const selectRestaurantMenuById = (id:string) => (state:RootState) =>
  selectRestaurantById(id)(state)?.menu;