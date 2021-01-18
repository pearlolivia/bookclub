import React from 'react';
import {Link} from 'react-router';
import logo from '../images/bookClubLogo.JPG';
import {MDBIcon} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../styles/all.css';

const linkStyle = {
    textDecoration: "none"
}

export const Header = () => {
    return (
        <div style={{paddingTop: '10px'}}>
                    <div style={{display:"flex", padding:"10px", paddingLeft: "10px", paddingTop:"20px"}}>
                        <Link to="/home" style={linkStyle}>
                            <img src={logo} style={{width: '100px', height: '100px', borderRadius:"48px"}}/>
                        </Link>
                        <div style={{paddingRight:"20px", marginLeft:"20px", width:"100px", textAlign: "center"}}>
                            <Link to="/add" className="link"><MDBIcon icon="plus" size="3x"/>
                                <h5>Add New Book</h5></Link>
                        </div>
                        <div style={{width:"100px", textAlign: "center"}}>
                            <Link to="/login" className="link"><MDBIcon icon="user" size="3x" />
                                <h5>Login/Register</h5></Link>
                        </div>
                        <div style={{width:"100px", paddingLeft:"30px", textAlign: "center"}}>
                            <a href="https://join.skype.com/k8vs5q9SAeRJ" target="_blank" className="link"><MDBIcon icon="desktop" size="3x" />
                                <h5>Join Meeting</h5></a>
                        </div>
                    </div>
        </div>
    )
}
