import {MDBIcon} from "mdbreact";
import React from "react";
import Firebase from "firebase";

function deleteComment(bookId, commentId) {
    Firebase.database().ref('/books/' + bookId + '/comments/' + commentId).remove();
}

export const CommentSection = ({comments, signedInUser, bookId}) => {
    return (
        <div>
            {comments.map(comment => {
                let display = 'none';
                if(signedInUser === comment.username) {
                    display = ' ';
                }
                return (
                    <div style={{paddingBottom: '10px'}}>
                        <p>{comment.comment}
                            <br/>
                            <br/>
                            <span>{comment.date}</span>
                            <span
                                style={{float: "right"}}><b><i>- {comment.username}</i></b></span>
                        </p>
                        <div style={{cursor: "point", display: display}} onClick={deleteComment.bind(null, bookId, comment.id)}>
                            <MDBIcon icon="minus" size="1x" />
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}
