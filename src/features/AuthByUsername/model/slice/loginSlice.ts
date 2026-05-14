import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginSchema } from "../types/loginSchema";

const initialState: loginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: undefined,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  }
});
export const { actions: loginAction } = loginSlice;
export const { reducer: loginReducer } = loginSlice;