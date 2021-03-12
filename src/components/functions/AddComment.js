import Firebase from 'firebase';

export function addComment(values, username, bookId, date) {
    const key = Firebase.database().ref('/books/' + bookId + '/comments/').push().key;

    Firebase.database().ref('/books/' + bookId + '/comments/' + key).set({
        comment: values.comment,
        date: date,
        username: username,
        id: key
    })
}
