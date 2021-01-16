import React, {Component} from "react";
import {Link} from 'react-router';
import {Formik} from "formik";
import {AuthInput} from "../Constants";
import {login} from "../functions/Account";

export default class LogInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        }
    }
    render() {
        return (
            <div style={{padding: "20px"}}>
                <div style={{padding: "20px", textAlign: 'center'}}>
                    <h1>Log In</h1>
                    <Formik initialValues={{email: '', password: ''}} onSubmit={(values, actions) => {
                        login(values);
                    }} >
                        {props => (
                            <React.Fragment>
                                <div>
                                    <AuthInput
                                        props={props}
                                        formikKey="email"
                                        label="Email:"
                                        placeholder="Email"/>
                                    <AuthInput
                                        props={props}
                                        formikKey="password"
                                        label="Password:"
                                        placeholder="Password"/>
                                    <div>
                                        <button onClick={props.handleSubmit}>LOGIN</button>
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                    </Formik>
                    <h4 style={{paddingTop:'15px'}}>Don't have an account? Sign up to access site</h4>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        )
    }
}
