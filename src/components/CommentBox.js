import {addComment} from "./functions/AddComment";
import React from "react";
import {AuthTextArea} from "./Constants";
import {Formik} from "formik";

export const CommentBox = ({bookId, userId}) => {
    return (
        <Formik initialValues={{comment: ''}} onSubmit={(values) => {
            if(userId) {
                addComment(values, userId, bookId, new Date().toDateString());
                console.log(bookId);
            } else {
                window.alert('Please log in to comment!')
            }
        }}>
            {props => (
                <React.Fragment>
                    <div style={{paddingTop: '5px'}}>
                        <AuthTextArea
                            props={props}
                            formikKey="comment"
                            placeholder="Write comment..."/>
                        <button style={{height: '30px'}} onClick={props.handleSubmit}>Comment</button>
                    </div>
                </React.Fragment>
            )}
        </Formik>
    )
}
