import React from "react";
import { Link } from "react-router-dom";

const PostTile = ({ id, title, description, }) => {
  return (
   
    <div className="column is-one-third">
            <div className="card-content">
              <div className="content">
                <h4>
                  <Link to={`/posts/${id}`} className="has-text-dark-orange">
                    {" "}
                    {title}{" "}
                  </Link>
                </h4>
                <p>{description}</p>
              </div>
            </div>
          </div>

  );
};

export default PostTile;
