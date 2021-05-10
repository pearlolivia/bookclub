import {MDBIcon} from "mdbreact";
import React from "react";
import Firebase from "firebase";

function deleteComment(filmId, commentId) {
    Firebase.database().ref('/films/' + filmId + '/comments/' + commentId).remove();
}

function updateComment(filmId) {
    Firebase.database().ref('/films/' + filmId).update({
        comments: 0
    });
}

export const CommentSection = ({comments, signedInUser, filmId}) => {
    return (
        <div>
            {comments.map(comment => {
                let display = 'none';
                if(signedInUser === comment.username) {
                    display = ' ';
                }
                let button = <div style={{cursor: "point", display: display}}
                                  onClick={deleteComment.bind(null, filmId, comment.id)}>
                                <MDBIcon icon="minus" size="1x"/>
                            </div>;
                if(comments.length === 1) {
                    button = <div style={{cursor: "point", display: display}} onClick={updateComment.bind(null, filmId)}>
                        <MDBIcon icon="minus" size="1x" />
                    </div>;
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
                        {button}
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}
