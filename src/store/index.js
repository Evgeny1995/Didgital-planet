import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./somthingSlice.js";
export default configureStore({
  reducer: { modalshow: modalReducer },
});
