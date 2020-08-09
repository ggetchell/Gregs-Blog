import React from 'react';

const Comment = ({ id, rating, body, user, postId }) => {
    const onChangeDelete = event => {
        event.preventDefault()
        fetch(`/api/v1/posts/${postId}/comments/${id}.json`, {
            credentials: "same-origin",
            method: 'DELETE',
            headers: {
                'Accept': 'application.json',
                'Content-Type': 'application.json',
            },
        })
    }
    return (


            <div key={id} className="column">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <h4 className="title">
                                {user} - Rating: {rating}
                            </h4>
                            <p>{body}</p>
                            <div className="button" onClick={onChangeDelete}>Delete Comment</div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Comment;