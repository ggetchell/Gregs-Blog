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
                setPosts(body.posts);
            })
            .catch((error) => console.error(`Error in fetch: ${error.message}`));
    },      []);

    let postTiles = posts.map((posts) => {
        return (
            <PostTile
                id={post.id}
                key={post.id}
                title={post.title}
                body={post.body}

            />
        );
    });

    return (
        <div>
            <h1 className="title">Posts</h1>
            <div className="container">
                <div className="columns">{postTiles}</div>
            </div>
        </div>
    );
};

export default PostsIndexContainer;