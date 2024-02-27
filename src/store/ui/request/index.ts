import {Action, createSlice} from "@reduxjs/toolkit";
export enum REQUEST_STATUS  {
  pending = 'pending',
  success = 'success',
  fail = 'fail',
  idle = 'idle'
}
export type RequestState = {
  [requestId: string]: REQUEST_STATUS;
}
interface ActionWithMeta extends Action {
  meta: {
    requestId: string;
  };
}

export const requestSlice = createSlice({
  name: 'request',
  initialState: {} as RequestState,
  selectors:{
    selectIsLoading:(state, id) => state[id] === REQUEST_STATUS.pending
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({type}) => type.endsWith('/pending'),
        (state, action) => {
          state[(action as ActionWithMeta).meta.requestId] = REQUEST_STATUS.pending;
        }
      ).addMatcher(
      ({ type }) => type.endsWith("/fulfilled"),
      (state, action) => {
        state[(action as ActionWithMeta).meta.requestId] =
          REQUEST_STATUS.success;
      }
    )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, action) => {
          state[(action as ActionWithMeta).meta.requestId] =
            REQUEST_STATUS.fail;
        }
      )
  }
})
export  const {selectIsLoading} = requestSlice.selectors