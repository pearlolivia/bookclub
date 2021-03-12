import React from "react";

export const Sidebar = ({reading, bookTitle, bookAuthor, functionTitle, functionAuthor}) => {
    return (
        <div>
            <h2>{reading}</h2>
            <h5><input
                type='text'
                name='currentTitle'
                style={{border: 'none', fontWeight: 'bold'}}
                onChange={functionTitle}
                defaultValue={bookTitle}
            /></h5>
            <h5>By <br/>
                <input
                    type='text'
                    name='currentAuthor'
                    style={{border: 'none', fontStyle: 'italic'}}
                    defaultValue={bookAuthor}
                    onChange={functionAuthor}
                /></h5>
            <hr/>
        </div>
    )
}
