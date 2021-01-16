import Firebase from 'firebase';

export function addSuggestion(values) {
    const key = Firebase.database().ref('/suggestions').push().key;

    Firebase.database().ref('/suggestions/' + key).set({
        id: key,
        author: values.author,
        title: values.title
    })
}

export function deleteSuggestion(id) {
    Firebase.database().ref('/suggestions/' + id).remove()
}
