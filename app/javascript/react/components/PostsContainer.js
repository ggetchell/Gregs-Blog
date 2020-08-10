import React, { useState, useEffect } from "react";
import PostTile from "./PostTile";

const PostsIndexContainer = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/v1/posts")
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setPosts(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let postTiles = posts.map((post) => {
    return (
      <PostTile
        id={post.id}
        key={post.id}
        title={post.title}
        description={post.description}
      />
    );
  });

  return (
    <div>
      <h1 className="">Posts</h1>
      <div className="call">
        <div className="columns is-multiline features">{postTiles}</div>
      </div>
    </div>
  );
};

export default PostsIndexContainer;
