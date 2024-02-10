import {createSlice} from "@reduxjs/toolkit";
import {normalizedUsers} from "../../../constants/normalizedMock.ts";


export type User = {
  id: string,
  name: string,
}
export type UserSliceData = {
  entities: { [id: string]: User },
  ids: string[]
}

const initialState: UserSliceData = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user
    return acc
  }, {} as { [id: string]: User }),
  ids: normalizedUsers.map(({id}) => id),
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  }
});
export default userSlice.reducer;
