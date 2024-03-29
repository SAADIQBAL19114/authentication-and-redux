import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "algo",
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => {
  console.log(state);
  return state.algo.user;
};
export const selectCurrentToken = (state) => state.algo.token;
