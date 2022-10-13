import rootReducer from ".";
import { configureStore } from "@reduxjs/toolkit";

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
const Store = makeStore();
export default Store;
