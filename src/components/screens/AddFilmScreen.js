import React, {Component} from "react";
import {Formik} from "formik";
import {AuthInput, AuthTextArea} from "../Constants";
import {addNewFilm} from '../functions/AddFilm';

export default class AddFilmScreen extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Add New Film Review</h1>
                <Formik initialValues={{comment: ''}} onSubmit={(values) => {
                    addNewFilm(values);
                    this.props.history.push('/');
                }}>
                    {props => (
                        <React.Fragment>
                            <div style={{textAlign: 'center'}}>
                                <AuthInput
                                    props={props}
                                    label="Title"
                                    formikKey="title"
                                    placeholder="Title:"/>
                                <AuthInput
                                    props={props}
                                    label="Year"
                                    formikKey="year"
                                    placeholder="Year:"/>
                                <AuthTextArea
                                    props={props}
                                    formikKey="synopsis"
                                    label="Synopsis"
                                    placeholder="Summarise for us:"
                                style={{height: '100px', overflowWrap: 'breakWord'}}/>
                                <AuthInput
                                    props={props}
                                    formikKey="starring"
                                    label="Starring"
                                    placeholder="List the actors:"/>
                                <button onClick={props.handleSubmit}>Submit</button>
                            </div>
                        </React.Fragment>
                    )}
                </Formik>
            </div>
        );
    }
}
