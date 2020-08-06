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

    const onSubmitHandler = (event) => {
        event.preventDefault();
        addComment(comment);
    };

    const clearForm = () => {
        serComment({
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
                  setErrors("Please sign in to make Comments");
                } else {
                    setErrors(body.error[0]);
                }
            })
            .catch((error) => console.error(`Error in fetch: ${error.message}`));
    };

    return (
        <div>
            <div>
                <section>
                    <div>
                        <form className="callout" onSubmit={onSubmitHandler}>
                        <p>{errorMessage}</p>
                        <h2>New Comment</h2>
                        <div>
                            <label htmlFor="rating">
                                <input
                                    type="integer"
                                    id="rating"
                                    name="rating"
                                    onChange={handleInputChange}
                                    placeholder="Rating, 1-10"
                                    className="input"
                                    size="10"
                                    value={comment.rating}
                                />
                            </label>
                        </div>

                        <div>
                            <label htmlFor="body">
                                <textarea
                                    cols="40"
                                    type="text"
                                    id="body"
                                    name="body"
                                    class="textarea is-primary is-focused center"
                                    onChange={handleInputChange}
                                    placeholder="Body"
                                    value={comment.body}
                                />
                            </label>
                        </div>

                        <div className="buttons">
                            <input
                                type="submit"
                                className="button"
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