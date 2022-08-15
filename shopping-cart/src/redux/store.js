import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
};
const reducer = combineReducers({
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  //   reducer: {
  //     cart: cartSlice,
  //   },
  reducer: persistedReducer,
});
export default store;
