import Firebase from 'firebase';

export function updateCurrentAuthor(value) {
    Firebase.database().ref('/current').update({
        author: value
    })
}

export function updateCurrentTitle(value) {
    Firebase.database().ref('/current').update({
        title: value
    })
}

export function updateNextAuthor(value) {
    Firebase.database().ref('/upNext').update({
        author: value
    })
}

export function updateNextTitle(value) {
    Firebase.database().ref('/upNext').update({
        title: value
    })
}
