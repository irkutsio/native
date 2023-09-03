import { createSlice } from "@reduxjs/toolkit";


const authInitialState = {
  user: { email: "", password: "" },
};
export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    createAccount(state, { payload }) {
      state.user.email = payload.email;
      state.user.password = payload.password;
    },
    userLogin(state, { payload }) {
      state.user = payload;
    },
    logOut(state) {
      state.user = { email: "", password: "" };
    },
  },
});

export const { createAccount, userLogin, logOut, refreshUser } = authSlice.actions;
export const authReducer = authSlice.reducer;