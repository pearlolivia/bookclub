import Firebase from 'firebase';

const key = Firebase.database().ref('/books').push().key;

export function addNewFilm(values) {
    Firebase.database().ref('/films/' + key).set({
        id: key,
        year: values.year,
        synopsis: values.synopsis,
        starring: values.starring,
        title: values.title,
        comments: 0
    })
}
