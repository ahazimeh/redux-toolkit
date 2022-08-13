import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cartSlice";

const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
  },
});
export default store;
