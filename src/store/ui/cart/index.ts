import {createSlice} from "@reduxjs/toolkit";

interface CartState {
  [menuId: string]: number;
}


const initialState: CartState = {};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, {payload: menuId}) {
      state[menuId] = Math.min((state[menuId] || 0) + 1, 5);
    },
    removeFromCart(state, {payload: menuId}) {
      state[menuId] = Math.max((state[menuId] || 0) - 1, 0);
      if(state[menuId] <= 0) {
        delete state[menuId]
      }
    },
  },
  selectors:{
    selectDishAmountById: (state, menuId) => state[menuId] || 0,
    selectDishAmount: (state) =>
      Object.values(state).reduce((acc, amount) => {
        return acc + amount;
      }, 0),
    selectCartProductIds: (state) => Object.keys(state),
  }
})
export const {selectDishAmountById,
  selectDishAmount,
  selectCartProductIds} = cartSlice.selectors
export const { addToCart, removeFromCart} = cartSlice.actions