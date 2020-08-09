import React from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";

const PostShow = ({ id, title, description, comments }) => {
  const postComments = comments.map((comment) => {
    return (
      <Review
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
      <div className="column is-one-third">
        <section className="section-padding-medium p-t-lg p-l-lg">
          <div className="card is-shady is-4">
            <div className="card-image">
              <figure className="image">
                <img src={image_url} alt="item image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h4 className="title has-text-dark-orange">{title}</h4>
                <p>{description}</p>
                <div className="buttons">
                  <a href={url}>
                    <button className="button is-primary has-text-dark">
                      <b> ... </b>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="column p-t-lg m-t-lg">{postComments}</div>
    </div>
  );
};

export default PostShow;
