import {combineSlices, configureStore} from "@reduxjs/toolkit";
import {restaurantSlice} from "./entities/restaurant";
import {dishMenuSlice} from "./entities/dish";
import {reviewSlice} from "./entities/review";
import {userSlice} from "./entities/user";
import {requestSlice} from "./ui/request";
import {cartSlice} from "./ui/cart";

export const store = configureStore({
  reducer: combineSlices(restaurantSlice,dishMenuSlice,reviewSlice,userSlice,requestSlice,cartSlice),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

console.log(store.getState())