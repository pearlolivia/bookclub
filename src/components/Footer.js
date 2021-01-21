import React from 'react';
import "mdbreact/dist/css/mdb.css";
import Firebase from 'firebase';
import logo from '../logo.svg';
import '../styles/all.css';
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
                <p><span onClick={logOut} style={{cursor: 'pointer'}} className="signOut">Sign Out</span>
                <br/>
                Created with React.js <img src={logo} style={{width: "40px", height: "40px"}}/>
                <br/>
                {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}
