import {RootState} from "../../index.tsx";

export const selectDishMenuModule = (state: RootState) => state.dish;
export const selectDishMenuWithIds = (state: RootState) => state.dish.entities;
export const selectDishMenuIds = (state: RootState) => selectDishMenuModule(state).ids;
export const selectDishMenuById = (id:string) => (state:RootState) =>
  selectDishMenuModule(state).entities[id];