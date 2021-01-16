import React from 'react';
import Link from "react-router/lib/Link";
import "mdbreact/dist/css/mdb.css";
import Firebase from 'firebase';
import logo from '../logo.svg';

function logOut() {
    try {
        Firebase.auth().signOut();
        console.log('User logged out successfully.');
        window.location.reload();
    } catch(e) {
        console.error(e);
    }
}

export const Footer = () => {
    return (
        <div>
            <hr />
            <div style={{textAlign: "center"}}>
                <p><Link to="/home" onClick={logOut}>Sign Out</Link></p>
                <p>Created with React.js <img src={logo} style={{width: "40px", height: "40px"}}/>
                <br/>
                    {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}
