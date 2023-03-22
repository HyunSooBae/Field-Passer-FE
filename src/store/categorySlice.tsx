import { createSlice } from '@reduxjs/toolkit';

export interface CategoryType {
  catagorySelect: boolean | string;
  districtSelect: boolean | string;
  stadiumSelect: boolean | string;
}

const initialState: CategoryType = {
  catagorySelect: false,
  districtSelect: false,
  stadiumSelect: false,
};

const categorySlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    selected: (state, action) => {
      switch (action.payload.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')) {
        case 'category':
          state.catagorySelect = action.payload.replace(/[a-zA-Z]/g, '');
          state.districtSelect = false;
          state.stadiumSelect = false;
          break;
        case 'district':
          state.districtSelect = action.payload.replace(/[a-zA-Z]/g, '');
          break;
        case 'stadium':
          state.stadiumSelect = action.payload.replace(/[a-zA-Z]/g, '');
          break;
        default:
          break;
      }
    },
    unselected: (state, action) => {
      switch (action.payload.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')) {
        case 'category':
          state.catagorySelect = false;
          state.districtSelect = false;
          break;
        case 'district':
          state.districtSelect = false;
          break;
        case 'stadium':
          state.stadiumSelect = false;
          break;
        case 'all':
          state.catagorySelect = false;
          state.districtSelect = false;
          state.stadiumSelect = false;
        default:
          break;
      }
    },
  },
});

export const { selected, unselected } = categorySlice.actions;
export default categorySlice.reducer;
