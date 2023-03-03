import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  user_name: null,
  // user_id: null,
  user_profile: null,
}

const LoggedState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAccount(state, action) {
      state.isLogged = true;
      state.user_name = action.payload.user_name;
      state.user_profile = action.payload.user_profile;
    },
    logoutAccount(state) {
      state.isLogged = false;
      state.user_name = null;
      state.user_profile = null;
    },
  },
});

export const { loginAccount, logoutAccount } = LoggedState.actions;
export default LoggedState.reducer;