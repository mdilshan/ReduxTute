import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../store/postsSclice";

const PostsList = () => {
  const { posts, loading } = useSelector(selectPosts);

  console.log("Posts RERENDERD");
  return (
    <>
      {loading ? (
        <div>LOADING.....</div>
      ) : (
        <div className="col">
          {posts &&
            posts.map((p) => (
              <div key={p.id}>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default PostsList;
