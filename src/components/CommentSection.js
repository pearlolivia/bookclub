import {MDBIcon} from "mdbreact";
import React from "react";
import Firebase from "firebase";

function deleteComment(filmId, commentId) {
    Firebase.database().ref('/books/' + filmId + '/comments/' + commentId).remove();
}

export const CommentSection = ({comments, signedInUser, filmId}) => {
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
                        <div style={{cursor: "point", display: display}} onClick={deleteComment.bind(null, filmId, comment.id)}>
                            <MDBIcon icon="minus" size="1x" />
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}
