import {createAsyncThunk } from "@reduxjs/toolkit";

export type User = {
  id: string,
  name: string,
}
export const getUsers = createAsyncThunk<User[], void>(
  'restaurant/getUser',
  async ()=> {
    const response = await fetch ('http://localhost:3001/api/users');
    return await response.json();
  });
