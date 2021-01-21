import React, {Component} from "react";
import {Formik} from "formik";
import {AuthInput} from "../Constants";
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
                                        formikKey="email"
                                        label="Email:"
                                        placeholder="Email"/>
                                    <AuthInput
                                        props={props}
                                        formikKey="username"
                                        label="Username:"
                                        placeholder="Username"/>
                                    <AuthInput
                                        props={props}
                                        formikKey="password"
                                        label="Password:"
                                        placeholder="Password"/>
                                    <AuthInput
                                        label="Confirm Password:"
                                        props={props}
                                        formikKey="confirmPassword"
                                        placeholder="Please confirm password"
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
