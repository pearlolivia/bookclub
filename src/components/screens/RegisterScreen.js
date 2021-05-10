import React, {Component} from "react";
import {Formik} from "formik";
import {AuthInput, AuthPasswordInput} from "../Constants";
import {register} from "../functions/Account";

export default class RegisterScreen extends Component {
    render() {
        return (
            <div style={{padding: "20px"}}>
                <div style={{padding: "20px", textAlign: 'center'}}>
                    <h1>Sign Up Here</h1>
                    <Formik initialValues={{email: '', password: '', confirmPassword: '', username: ''}} onSubmit={(values, actions) => {
                        register(values);
                        setTimeout(() => {
                            actions.setSubmitting(false);
                        }, 1000);
                        this.props.history.push('/login');
                    }} >
                        {props => (
                            <React.Fragment>
                                <div>
                                    <AuthInput
                                        props={props}
                                        label="Email"
                                        formikKey="email"
                                        placeholder="Email:"/>
                                    <AuthInput
                                        props={props}
                                        label="Username"
                                        formikKey="username"
                                        placeholder="Username:"/>
                                    <AuthPasswordInput
                                        props={props}
                                        label="Password"
                                        formikKey="password"
                                        placeholder="Password:"/>
                                    <AuthPasswordInput
                                        props={props}
                                        label="Confirm password"
                                        formikKey="confirmPassword"
                                        placeholder="Please confirm password:"
                                    />
                                    <div>
                                        <button onClick={props.handleSubmit}>REGISTER</button>
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}
