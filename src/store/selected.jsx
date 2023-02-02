import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catagorySelect: false,
  districtSelect: false,
};
const selectedState = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    selected: (state, action) => {
      switch(action.payload){
        case 'category' :
          state.catagorySelect = true ;
          break;
        case 'district' : 
          state.districtSelect = true ;
          break
        default :
          break
      }
    },
    unselected: (state) => {
      state.catagorySelect = false;
    },
  },
});

export default selectedState;
export const { selected, unselected } = selectedState.actions;
