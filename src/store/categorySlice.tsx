import { createSlice } from '@reduxjs/toolkit';

export interface CategoryType {
  catagorySelect: boolean;
  districtSelect: boolean;
}

const initialState: CategoryType = {
  catagorySelect: false,
  districtSelect: false,
};

const categorySlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    selected: (state, action) => {
      switch (action.payload) {
        case 'category':
          state.catagorySelect = true;
          break;
        case 'district':
          state.districtSelect = true;
          break;
        default:
          break;
      }
    },
    unselected: (state, action) => {
      switch (action.payload) {
        case 'category':
          state.catagorySelect = false;
          state.districtSelect = false;
          break;
        case 'district':
          state.districtSelect = false;
          break;
        default:
          break;
      }
    },
  },
});

export const { selected, unselected } = categorySlice.actions;
export default categorySlice.reducer;
