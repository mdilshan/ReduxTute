import logo from "./logo.svg";
import { useState, useCallback, useEffect } from "react";
import "./App.css";
import PostList from "./components/Posts";
import UserList from "./components/Users";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loadPostsAction, reset } from "./store/postsSclice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsAction());
  }, []);

  const getPostsClick = () => {
    dispatch(loadPostsAction());
  };

  const clearPosts = () => {
    dispatch(reset());
  };

  console.log("APP RERENDERD");

  return (
    <div className="container">
      <div className="row">
        <button className="btn btn-primary" onClick={getPostsClick}>
          Get Posts
        </button>
        <button className="btn" onClick={clearPosts}>
          Reset
        </button>
      </div>
      <div className="row">
        <div className="col-md-9">
          <PostList />
        </div>
        <div className="col-md-3">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
