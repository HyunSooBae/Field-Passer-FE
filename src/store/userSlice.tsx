import { createSlice } from '@reduxjs/toolkit';

export type userStateType = {
  // isLogged: boolean;
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

const initialState: userStateType = {
  // isLogged: false,
  authority: 0,
  delete: 0,
  email: '',
  memberId: 0,
  memberName: 'initial',
  privilege: 0,
  profileImg: '',
  signUpDate: null,
  visitCount: 0,
};

const LoggedState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      Object.assign(state, action.payload);
    },
    DELETE_USER: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { SET_USER, DELETE_USER } = LoggedState.actions;
export default LoggedState.reducer;
