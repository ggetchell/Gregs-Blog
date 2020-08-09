import React, { useState } from "react";

const CommentFormContainer = (props) => {
  const [comment, setComment] = useState({
    rating: "",
    body: "",
  });

  const [errors, setErrors] = useState("");

  let errorMessage = <p></p>;
  if (errors !== "") {
    errorMessage = <p>{errors}</p>;
  }

  const handleInputChange = (event) => {
    setComment({
      ...comment,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    addNewComment(comment);
  };

  const clearForm = () => {
    setComment({
      rating: "",
      body: "",
    });
  };

  const addNewComment = (comment) => {
    fetch(`/api/v1/posts/${props.postId}/comments`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
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
        if (body.comment) {
          props.addComment(body.comment);
          clearForm();
        } else if (body.errors[1] === "User must exist") {
          setErrors("Please sign in to make reviews");
        } else {
          setErrors(body.errors[0]);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  return (
    <div className="level">
      <div className="p-l-lg">
        <section className="section-padding-medium">
          <div className="card is-shady center p-lg">
            <form className="callout secondary" onSubmit={onSubmitHandeler}>
              <p className="has-text-dark">{errorMessage}</p>
              <h2 className="title has-text-purple center">New Comment</h2>
              <div className="p-b-sm">
                <label htmlFor="rating">
                  <input
                    type="integer"
                    id="rating"
                    name="rating"
                    onChange={handleInputChange}
                    placeholder="Rating, 1-5"
                    className="input is-purple is-focused inline"
                    size="10"
                    value={comment.rating}
                  />
                </label>
              </div>

              <div>
                <label htmlFor="body">
                  <textarea
                    cols="30"
                    type="text"
                    id="body"
                    name="body"
                    class="textarea is-primary is-focused center p-b-sm"
                    onChange={handleInputChange}
                    placeholder="Body"
                    value={comment.body}
                  />
                </label>
              </div>

              <div className="buttons p-b-sm p-t-sm center">
                <input
                  type="submit"
                  className="button is-purple p-b-sm p-t-sm center"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommentFormContainer;
