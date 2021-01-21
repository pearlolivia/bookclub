import React, {Component} from "react";
import {Formik} from "formik";
import {AuthInput, AuthTextArea} from "../Constants";
import {addNewBook} from '../functions/AddBook';

export default class AddBookScreen extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Add New Book</h1>
                <Formik initialValues={{comment: ''}} onSubmit={(values) => {
                    addNewBook(values);
                    this.props.history.push('/');
                }}>
                    {props => (
                        <React.Fragment>
                            <div style={{textAlign: 'center'}}>
                                <AuthInput
                                    props={props}
                                    formikKey="title"
                                    placeholder="Title:"/>
                                <AuthInput
                                    props={props}
                                    formikKey="author"
                                    placeholder="Author:"/>
                                <AuthTextArea
                                    props={props}
                                    formikKey="synopsis"
                                    label="Synopsis"
                                    placeholder="Summarise for us:"
                                style={{height: '100px', overflowWrap: 'breakWord'}}/>
                                <AuthInput
                                    props={props}
                                    formikKey="themes"
                                    label="Themes"
                                    placeholder="List the themes explored:"/>
                                <button onClick={props.handleSubmit}>Submit</button>
                            </div>
                        </React.Fragment>
                    )}
                </Formik>
            </div>
        );
    }
}
