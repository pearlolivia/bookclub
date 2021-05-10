import React, {Component, useState} from "react";
import Firebase from 'firebase';
import {firebaseConfig} from "../Firebase";
import {AuthInput} from "../Constants";
import {Formik} from "formik";
import {updateNextYear, updateNextTitle} from "../functions/EditFilms";
import {addSuggestion} from "../functions/Suggestions";
import {MDBIcon} from "mdbreact";
import {CommentBox} from "../CommentBox";
import {CommentSection} from "../CommentSection";
import {Film} from "../BookInfo";
import {Sidebar} from "../Sidebar";

let onClick = false;

const ShowInputs = () => {
    const [showInputs, setShowInputs] = useState(false);
    onClick = () => setShowInputs(true);

    return (
        <div>
            { showInputs ? <div style={{padding: '5px'}}>
                <Formik initialValues={{title: '', year: ''}} onSubmit={(values) => {
                    addSuggestion(values);
                }} >
                    {props => (
                        <React.Fragment>
                            <div>
                                <AuthInput
                                    props={props}
                                    formikKey="title"
                                    placeholder="Title:"/>
                                <AuthInput
                                    props={props}
                                    formikKey="year"
                                    placeholder="Year:"/>
                                <div>
                                    <button onClick={props.handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </Formik>
            </div> : null }
        </div>
    )
}

export default class HomeScreen extends Component {
    constructor() {
        super();
        if (!Firebase.apps.length) {
            Firebase.initializeApp(firebaseConfig);
        }
        this.state = {
            films: [],
            nextFilm: ['', ''],
            signedInUser: '',
            suggestions: [],
        };
    }

    // async getCurrentBook() {
    //     const currentRef = await Firebase.database().ref('/current');
    //     currentRef.on('value', snapshot => {
    //         const book = Object.values(snapshot.val());
    //         this.setState({currentBook: book});
    //     });
    // }

    async getNextFilm() {
        const nextRef = await Firebase.database().ref('/upNext');
        nextRef.on('value', snapshot => {
            const film = Object.values(snapshot.val());
            this.setState({nextFilm: film});
        });
    }

    async getSuggestions() {
        const suggRef = await Firebase.database().ref('/suggestions');
        suggRef.on('value', snapshot => {
                let films = Object.values(snapshot.val());
                this.setState({suggestions: films});
        })
    }

    getFilms() {
        const ref = Firebase.database().ref('/films');
        ref.on('value', snapshot => {
            const dataObject = snapshot.val();
            const dataArray = Object.values(dataObject);
            this.setState({films: dataArray});
        })
    }

    async getSignedInUser() {
        let currentUser = await Firebase.auth().currentUser;
        if (currentUser !== null) {
            this.setState({signedInUser: currentUser.displayName});
        }
    }

    deleteSuggestion(id) {
        Firebase.database().ref('/suggestions/' + id).remove();
    }

    componentDidMount() {
        this.getFilms();
        this.getSignedInUser();
        this.getNextFilm();
        this.getSuggestions();
    }

    render() {
        const {films} = this.state;
        const {suggestions} = this.state;
             return (
                <div style={{paddingLeft:"10px", display:"flex"}}>
                    <div style={{maxWidth: "320px", borderRight:"1px solid black", padding:"10px"}}>
                        <h1 style={{textAlign: "center"}}>Welcome to Film Club {this.state.signedInUser ? this.state.signedInUser: ''}</h1>
                        <hr/>
                        <Sidebar
                            reading={'Up Next:'}
                            filmTitle={this.state.nextFilm[0]}
                            filmYear={this.state.nextFilm[1]}
                            functionTitle={event => updateNextTitle(event.target.value)}
                            functionYear={event => updateNextYear(event.target.value)} />

                        <h2>Suggestions:</h2>
                        {suggestions.map(suggestion => {
                            let id = suggestion.id;
                            return (
                                <div>
                                    <h5><b>{suggestion.title}</b>
                                        <br/>
                                        <i>{suggestion.year}</i>
                                        <div style={{cursor: "point"}} onClick={this.deleteSuggestion.bind(null, id)}>
                                            <MDBIcon icon="minus" size="1x" />
                                        </div>
                                    </h5>
                                </div>
                            )
                        })}
                        <ShowInputs />
                        <button onClick={onClick}>
                            <MDBIcon icon="plus" size="1x"/>
                        </button>
                    </div>
                    <div style={{padding:"10px"}}></div>
                    <div>
                    {films.map(film => {
                        let unorderedComments = Object.values(film.comments);
                        let comments = unorderedComments.slice().sort((a,b) => b.date - a.date);
                        let filmId = film.id;
                        return (
                            <div style={{paddingRight: "20px"}}>
                            <div style={{display: "flex", width: "100%", border: "1px solid black", borderRadius: "5px", padding:"10px"}}>
                                <Film
                                film={film}
                                />
                                <div style={{borderLeft: "1px solid black", paddingRight: "10px"}}></div>
                                <div>
                                    <h4>Discussion</h4>
                                    {comments.length === 0 ? (
                                        <div>
                                            <i>No one has anything to say about this film...yet!</i>
                                        </div>
                                    ) : (
                                        <CommentSection
                                        filmId={filmId}
                                        signedInUser={this.state.signedInUser}
                                        comments={comments} />
                                    )
                                    }
                                        <CommentBox
                                            filmId={filmId}
                                        userId={this.state.signedInUser} />
                                </div>
                            </div>
                                <div style={{padding:"10px"}}></div>
                            </div>
                        )
                    })
                    }
                    </div>
                </div>
            )
    }
}
