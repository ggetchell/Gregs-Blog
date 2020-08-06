import React from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";

const PostShow = ({ id, title, body, comments }) => {
    const postComments = comments.map((comment) => {
        return (
            <Comment
                key={comment.id}
                id={comment.id}
                rating={comment.rating}
                body={comment.body}
                user={comment.commenter_name}
            />
        );
    });
    return (
        <div className="columns">
            <div className="column">
                <section className="section">
                    <div className="card-content">
                        <div className="content">
                            <h4 className="title">{title}</h4>
                            <p>{body}</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="column">{postComments}</div>
        </div>
    );
};

export default PostShow;