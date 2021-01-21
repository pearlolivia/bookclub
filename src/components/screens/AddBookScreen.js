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
                                    label="Book Title"
                                    placeholder="Title"/>
                                <AuthInput
                                    props={props}
                                    formikKey="author"
                                    label="Book's Author"
                                    placeholder="Author"/>
                                <AuthTextArea
                                    props={props}
                                    formikKey="synopsis"
                                    label="Synopsis"
                                    placeholder="Describe the plot!"
                                style={{height: '100px', overflowWrap: 'breakWord'}}/>
                                <AuthInput
                                    props={props}
                                    formikKey="themes"
                                    label="Themes"
                                    placeholder="List the book's themes"/>
                                <button onClick={props.handleSubmit}>Submit</button>
                            </div>
                        </React.Fragment>
                    )}
                </Formik>
            </div>
        );
    }
}
