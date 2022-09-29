import { configureStore } from "@reduxjs/toolkit";
import slicer from "./slicer";

export default configureStore({
  reducer: {
    comments: slicer,
  },
});
