import { configureStore } from "@reduxjs/toolkit";
import selected from "./selected";

const store = configureStore({
  reducer: {
    selected: selected.reducer,
  },
});

export default store;