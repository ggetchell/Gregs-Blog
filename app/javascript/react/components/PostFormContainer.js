import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ErrorList from "./ErrorList";
import _ from "lodash";

const PostFormContainer = (props) => {
    const [postRecord, setPostRecord] = useState({
        title: "",
        body: "",
    });

    const [errors, setErrors] = useState({});

    const validFormSubmission = () => {
        let submitErrors = {};
        const requiredFields = ["title", "body"];
        requiredFields.forEach((field) => {
            if (postRecord[field].trim() === "") {
                submitErrors = {
                    ...submitErrors,
                    [field]: "is blank",
                };
            }
        });
        setErrors(submitErrors);
        return _.isEmpty(submitErrors);
    };

    const [shouldRedirect, setShouldRedirect] = useState(false);

    const handleInputChange = (event) => {
        setPostRecord({
            ...postRecord,
            [event.currentTarget.id]: event.currentTarget.value,
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (validFormSubmission()) {
            addNewPost(postRecord);
        }
    };

    const addNewPost = (post) => {
        fetch(`/api/v1/posts`, {
            metdod: "POST",
            credentials: "same-origin",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
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
                setShouldRedirect(true);
            })
            .catch((error) => console.error(`Error in fetch: ${error.message}`));
    };
    if (shouldRedirect) {
        return <Redirect to="/posts" />;
    }
    return (

        <div>
            <h1 className="title">New Blog Post Form</h1>
            <section className="container">
                <form onSubmit={onSubmitHandler}>
                    <div className="column">
                        <label htmlFor="title">
                            <input
                                type="text"
                                id="title"
                                name="title"
                                size="50"
                                className=""
                                placeholder="Title"
                                onChange={handleInputChange}
                                value={postRecord.title}
                            />
                        </label>
                    </div>
                    <div className="column">
                        <label htmlFor="body">
                            <input
                                type="text"
                                id="body"
                                name="body"
                                size="70" 
                                placeholder="Body"
                                onChange={handleInputChange}
                                value={postRecord.body}
                            />                          
                        </label>
                    </div>
                    <div className="column">
                        <div className="button-group">
                            <input 
                                type="submit"
                                className="button is-primary"
                                value="Submit "
                            />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};
    

export default PostFormContainer;