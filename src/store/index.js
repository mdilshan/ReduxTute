import { configureStore } from "@reduxjs/toolkit";
import postsReducers from "./postsSclice";

export default configureStore({
  reducer: {
    postsReducers,
  },
  devTools: true,
});
