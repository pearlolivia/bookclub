import React from "react";

export const Film = ({film}) => {
    return (
        <div style={{paddingRight: "10px", maxWidth: "35%"}}>
            <h3><b>{film.title}</b>
                <br />
                <span style={{fontSize:"20px"}}><i>{film.year}</i></span></h3>
            <hr/>
            <h4>Synopsis</h4>
            <p>{film.synopsis}</p>
            <br/>
            <h4>Starring</h4>
            <p>{film.starring}</p>
        </div>
    )
}
