import React from "react";
import { Link } from "react-router-dom";

const PostTile = ({ id, title, body }) => {
    return (


        <div className="column">
            <div className="card-content">
                <div className="content">
                    <h4>
                        <Link to={`/posts/${id}`} className="">
                            {" "}
                            {title}{" "}
                        </Link>
                    </h4>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};


export default PostTile;