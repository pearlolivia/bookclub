import Firebase from 'firebase';

// export function updateCurrentAuthor(value) {
//     Firebase.database().ref('/current').update({
//         author: value
//     })
// }
//
// export function updateCurrentTitle(value) {
//     Firebase.database().ref('/current').update({
//         title: value
//     })
// }

export function updateNextYear(value) {
    Firebase.database().ref('/upNext').update({
        year: value
    })
}

export function updateNextTitle(value) {
    Firebase.database().ref('/upNext').update({
        title: value
    })
}
