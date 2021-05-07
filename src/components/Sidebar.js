import React from "react";

export const Sidebar = ({reading, filmTitle, filmYear, functionTitle, functionAuthor}) => {
    return (
        <div>
            <h2>{reading}</h2>
            <h5><input
                type='text'
                name='currentTitle'
                style={{border: 'none', fontWeight: 'bold'}}
                onChange={functionTitle}
                defaultValue={filmTitle}
            /></h5>
            <h5><input
                    type='text'
                    name='currentAuthor'
                    style={{border: 'none', fontStyle: 'italic'}}
                    defaultValue={filmYear}
                    onChange={functionAuthor}
                /></h5>
            <hr/>
        </div>
    )
}
