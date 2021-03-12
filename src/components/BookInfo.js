import React from "react";

export const Book = ({book}) => {
    return (
        <div style={{paddingRight: "10px", maxWidth: "35%"}}>
            <h3><b>{book.title}</b>
                <br />
                <span style={{fontSize:"20px"}}>By <i>{book.author}</i></span></h3>
            <hr/>
            <h4>Synopsis</h4>
            <p>{book.synopsis}</p>
            <br/>
            <h4>Themes</h4>
            <p>{book.themes}</p>
        </div>
    )
}
