import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import categoryReducer from './categorySlice';
import authReducer from './authSlice';
import postReducer from './postSlice';
import userReducer from './userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  category: categoryReducer,
  auth: authReducer,
  post: postReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;
