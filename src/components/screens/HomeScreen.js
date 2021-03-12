import React, {Component, useState} from "react";
import Firebase from 'firebase';
import {firebaseConfig} from "../Firebase";
import {AuthInput} from "../Constants";
import {Formik} from "formik";
import {updateCurrentAuthor, updateCurrentTitle, updateNextAuthor, updateNextTitle} from "../functions/EditBooks";
import {addSuggestion} from "../functions/Suggestions";
import {MDBIcon} from "mdbreact";
import {CommentBox} from "../CommentBox";
import {CommentSection} from "../CommentSection";
import {Book} from "../BookInfo";
import {Sidebar} from "../Sidebar";

let onClick = false;

const ShowInputs = () => {
    const [showInputs, setShowInputs] = useState(false);
    onClick = () => setShowInputs(true);

    return (
        <div>
            { showInputs ? <div style={{padding: '5px'}}>
                <Formik initialValues={{title: '', author: ''}} onSubmit={(values) => {
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
                                    formikKey="author"
                                    placeholder="Author:"/>
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
            books: [],
            nextBook: ['', ''],
            currentBook: ['', ''],
            signedInUser: '',
            suggestions: [],
        };
    }

    async getCurrentBook() {
        const currentRef = await Firebase.database().ref('/current');
        currentRef.on('value', snapshot => {
            const book = Object.values(snapshot.val());
            this.setState({currentBook: book});
        });
    }

    async getNextBook() {
        const nextRef = await Firebase.database().ref('/upNext');
        nextRef.on('value', snapshot => {
            const book = Object.values(snapshot.val());
            this.setState({nextBook: book});
        });
    }

    async getSuggestions() {
        const suggRef = await Firebase.database().ref('/suggestions');
        suggRef.on('value', snapshot => {
                let books = Object.values(snapshot.val());
                this.setState({suggestions: books});
        })
    }

    getBooks() {
        const ref = Firebase.database().ref('/books');
        ref.on('value', snapshot => {
            const dataObject = snapshot.val();
            const dataArray = Object.values(dataObject);
            this.setState({books: dataArray});
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
        this.getBooks();
        this.getCurrentBook();
        this.getSignedInUser();
        this.getNextBook();
        this.getSuggestions();
    }

    render() {
        const {books} = this.state;
        const {suggestions} = this.state;
             return (
                <div style={{paddingLeft:"10px", display:"flex"}}>
                    <div style={{maxWidth: "320px", borderRight:"1px solid black", padding:"10px"}}>
                        <h1 style={{textAlign: "center"}}>Welcome to Book Club {this.state.signedInUser ? this.state.signedInUser: ''}</h1>
                        <hr/>
                        <Sidebar
                        reading={'Currently Reading:'}
                        bookTitle={this.state.currentBook[1]}
                        bookAuthor={this.state.currentBook[0]}
                        functionTitle={event => updateCurrentTitle(event.target.value)}
                        functionAuthor={event => updateCurrentAuthor(event.target.value)} />

                        <Sidebar
                            reading={'Up Next:'}
                            bookTitle={this.state.nextBook[1]}
                            bookAuthor={this.state.nextBook[0]}
                            functionTitle={event => updateNextTitle(event.target.value)}
                            functionAuthor={event => updateNextAuthor(event.target.value)} />

                        <h2>Suggestions:</h2>
                        {suggestions.map(suggestion => {
                            let id = suggestion.id;
                            return (
                                <div>
                                    <h5><b>{suggestion.title}</b>
                                        <br/>
                                        By <i>{suggestion.author}</i>
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
                    {books.map(book => {
                        let unorderedComments = Object.values(book.comments);
                        let comments = unorderedComments.slice().sort((a,b) => b.date - a.date);
                        let bookId = book.id;
                        return (
                            <div style={{paddingRight: "20px"}}>
                            <div style={{display: "flex", width: "100%", border: "1px solid black", borderRadius: "5px", padding:"10px"}}>
                                <Book
                                book={book}
                                />
                                <div style={{borderLeft: "1px solid black", paddingRight: "10px"}}></div>
                                <div>
                                    <h4>Discussion</h4>
                                    {comments.length === 0 ? (
                                        <div>
                                            <i>No one has anything to say about this book...yet!</i>
                                        </div>
                                    ) : (
                                        <CommentSection
                                        bookId={bookId}
                                        signedInUser={this.state.signedInUser}
                                        comments={comments} />
                                    )
                                    }
                                        <CommentBox
                                        bookId={bookId}
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
