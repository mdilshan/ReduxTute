import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {
    loadPosts: (state, action) => {
      state.posts = action.payload;
    },
    reset: (state) => {
      state.posts = [];
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// async actions list
export const loadPostsAction = () => async (dispatch) => {
  dispatch(loading(true));
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch(loadPosts(res.data));
  dispatch(loading(false));
};

// sync action list
export const { loadPosts, reset, loading } = postsSlice.actions;

//selectors
export const selectPosts = (state) => {
  return state.postsReducers;
};

// reducers
export default postsSlice.reducer;
