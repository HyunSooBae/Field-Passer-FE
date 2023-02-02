import { configureStore } from "@reduxjs/toolkit";
import storeState from "./store";

const store = configureStore({
  reducer: {
    store: storeState.reducer,
  },
});

export default store;