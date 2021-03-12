import React, {Component} from "react";
import Firebase from 'firebase';
import {Link} from 'react-router-dom';
import {Formik} from "formik";
import {AuthInput, AuthPasswordInput} from "../Constants";
import {login} from "../functions/Account";

let display = '';
// if(Firebase.auth().currentUser.email) {
//     display = 'display: "none"';
// }

export default class LogInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            signedInUser: ''
        }
    }

    async getSignedInUser() {
        let currentUser = await Firebase.auth().currentUser;
        if (currentUser !== null) {
            this.setState({signedInUser: currentUser.displayName});
        }
    }

    componentDidMount() {
        this.getSignedInUser();
    }

    render() {
        //console.log(this.state.signedInUser);
        return (
            <div style={{padding: "20px"}}>
                <div style={{padding: "20px", textAlign: 'center'}}>
                    <h1>Log In</h1>
                    {this.state.signedInUser ?
                        <div>
                            <h2>You're already logged in, gal!</h2>
                        </div> :
                        <div>
                        <Formik initialValues={{email: '', password: ''}} onSubmit={(values, actions) => {
                            login(values);
                            setTimeout(() => {
                                actions.setSubmitting(false);
                            }, 2000);
                            this.props.history.push('/');
                        }}>
                            {props => (
                                <React.Fragment>
                                    <div style={{display}}>
                                        <AuthInput
                                            props={props}
                                            label="Email"
                                            formikKey="email"
                                            placeholder="Email:"/>
                                        <AuthPasswordInput
                                            props={props}
                                            label="Password"
                                            formikKey="password"
                                            placeholder="Password:"/>
                                        <div>
                                            <button onClick={props.handleSubmit}>LOGIN</button>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )}
                        </Formik>
                        <h4 style={{paddingTop:'15px'}}>Don't have an account? <Link to="/register"> Sign up</Link></h4>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
