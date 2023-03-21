import { createSlice } from '@reduxjs/toolkit';
import { PostType } from '@src/util/userPageTypes';

export interface CategoryType {
  catagoryVal: boolean | string;
  districtVal: boolean | string;
  stadiumVal: boolean | string;
  postData: PostType[];
  postMoreData: PostType[];
}

const initialState: CategoryType = {
  catagoryVal: false,
  districtVal: false,
  stadiumVal: false,
  postData: [],
  postMoreData: [],
};

const postSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    savePost: (state, action) => {
      state.catagoryVal = action.payload[0];
      state.districtVal = action.payload[1];
      state.stadiumVal = action.payload[2];
      state.postData = action.payload[3];
    },
    savePostMore: (state, action) => {
      state.postMoreData = action.payload;
    },
    scrollPost: (state, action) => {
      state.postData.push(action.payload);
      console.log(action.payload);
    },
  },
});

export const { savePost, savePostMore, scrollPost } = postSlice.actions;
export default postSlice.reducer;
