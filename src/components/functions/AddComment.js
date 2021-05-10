import Firebase from 'firebase';

export function addComment(values, username, filmId, date) {
    const key = Firebase.database().ref('/films/' + filmId + '/comments/').push().key;

    Firebase.database().ref('/films/' + filmId + '/comments/' + key).set({
        comment: values.comment,
        date: date,
        username: username,
        id: key
    })
}
