import { configureStore } from '@reduxjs/toolkit';
import storeState from './store';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    store: storeState.reducer,
    authToken: authReducer,
  },
});

// const authToken = configureStore({
//   reducer: {
//     authToken: authReducer,
//   },
// });

// const rootReducer = combineReducers({
//   user: userSlice,
//   item: detailSlice,
//   table: searchTableSlice,
//   footer: footerStateSlice,
// });

export default store;
// export default rootReducer;
