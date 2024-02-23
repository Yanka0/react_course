import {createSlice} from "@reduxjs/toolkit";

interface CartState {
  [menuId: string]: {amount: number, name: string};
}


const initialState: CartState = {};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, {payload: {id, name}}) {
      const amount = Math.min((state[id]?.amount || 0) + 1, 5);
      state[id] = {amount, name};
    },
    removeFromCart(state, {payload: id}) {
      state[id].amount = Math.max((state[id]?.amount || 0) - 1, 0);
      if(state[id]?.amount <= 0) {
        delete state[id]
      }
    },
  },
  selectors:{
    selectDishAmountById: (state, menuId) => state[menuId]?.amount || 0,
    selectDishAmount: (state) =>
      Object.values(state).reduce((acc, {amount}) => {
        return acc + amount;
      }, 0),
    selectCartProductIdsWithNames: (state) =>
      Object.entries(state).map(([menuId, { name }]) => ({ menuId, name })),
  }
})
export const {selectDishAmountById,
  selectDishAmount,
  selectCartProductIdsWithNames} = cartSlice.selectors
export const { addToCart, removeFromCart} = cartSlice.actions