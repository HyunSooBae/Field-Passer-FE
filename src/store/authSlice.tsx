import { createSlice } from '@reduxjs/toolkit';

export type authState = {
  authenticated: boolean;
  authority: number;
  delete: number;
  email: string;
  memberId: number;
  memberName: string;
  privilege: number;
  profileImg: string;
  signUpDate: unknown;
  visitCount: number;
};

const initialState: authState = {
  authenticated: false,
  authority: 0,
  delete: 0,
  email: '',
  memberId: 0,
  memberName: '',
  privilege: 0,
  profileImg: '',
  signUpDate: null,
  visitCount: 0,
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
