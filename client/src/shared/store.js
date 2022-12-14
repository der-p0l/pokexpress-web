import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../pages/Home/store/homeSlice";
import viewSlice from "../pages/View/store/viewSlice";

export default configureStore({
  reducer: {
    home: homeSlice,
    view: viewSlice,
  },
});
