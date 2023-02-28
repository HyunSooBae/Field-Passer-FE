import { createSlice } from '@reduxjs/toolkit';

type authState = {
  authenticated: boolean;
  accessToken: string;
};

const initialState: authState = {
  authenticated: false,
  accessToken: '',
};

const authSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    SET_TOKEN: (state, action) => {
      // 액세스 토큰 저장
      state.authenticated = true;
      state.accessToken = action.payload;
    },
    DELETE_TOKEN: (state) => {
      // 액세스 토큰 삭제
      state.authenticated = false;
      state.accessToken = '';
    },
  },
});

export const { SET_TOKEN, DELETE_TOKEN } = authSlice.actions;

export default authSlice.reducer;
