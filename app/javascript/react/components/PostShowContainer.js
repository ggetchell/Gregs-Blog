import React, { useState, useEffect } from "react";
import PostShow from "./PostShow";
import CommentFormConatiner from "./CommentFormContainer";

const PostShowContainer = (props) => {
  const [post, setPost] = useState({});

  const [comments, setComments] = useState([]);

  const postId = props.match.params.id;
  useEffect(() => {
    fetch(`/api/v1/posts/${postId}`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setProduct(body.post);
        setReviews(body.comments);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const addReview = (newComment) => {
    setReviews([...comments, newComment]);
  };

  return (
    <div className="">
      <PostShow
        key={post.id}
        id={post.id}
        name={post.title}
        description={post.description}
        comments={comments}
      />
      <ReviewFormConatiner postId={postId} addComment={addComment} />
    </div>
  );
};

export default PostShowContainer;