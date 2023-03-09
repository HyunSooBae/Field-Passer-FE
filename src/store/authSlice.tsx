import { createSlice } from '@reduxjs/toolkit';

type authState = {
  authenticated: boolean;
};

const initialState: authState = {
  authenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_AUTH: (state, action) => {
      // 로그인 상태 변경
      state.authenticated = action.payload;
    },
  },
});

export const { SET_AUTH } = authSlice.actions;

export default authSlice.reducer;
