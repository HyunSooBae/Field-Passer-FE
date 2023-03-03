import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catagorySelect: false,
  districtSelect: false,
};
const storeState = createSlice({
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

export default storeState;
export const { selected, unselected } = storeState.actions;
