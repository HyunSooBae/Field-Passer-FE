import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import storage from 'redux-persist/lib/storage/session';
// import logger from 'redux-logger';
import categoryReducer from './categorySlice';
import authReducer from './authSlice';

// const initialState = {
//   catagorySelect: false,
//   districtSelect: false,
// };
// const storeState = createSlice({
//   name: 'store',
//   initialState,
//   reducers: {
//     selected: (state, action) => {
//       switch (action.payload) {
//         case 'category':
//           state.catagorySelect = true;
//           break;
//         case 'district':
//           state.districtSelect = true;
//           break;
//         default:
//           break;
//       }
//     },
//     unselected: (state, action) => {
//       switch (action.payload) {
//         case 'category':
//           state.catagorySelect = false;
//           break;
//         case 'district':
//           state.districtSelect = false;
//           break;
//         default:
//           break;
//       }
//     },
//   },
// });

const persistConfig = {
  key: 'root',
  // version: 1,
  storage,
};

const rootReducer = combineReducers({
  category: categoryReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
// export const { selected, unselected } = storeState.actions;
