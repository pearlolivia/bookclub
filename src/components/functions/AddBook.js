import Firebase from 'firebase';

const key = Firebase.database().ref('/books').push().key;

export function addNewBook(values) {
    Firebase.database().ref('/books/' + key).set({
        id: key,
        author: values.author,
        synopsis: values.synopsis,
        themes: values.themes,
        title: values.title
    })
}
