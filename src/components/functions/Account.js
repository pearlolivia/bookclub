import Firebase from 'firebase';

export async function login(values) {
    Firebase.auth().signInWithEmailAndPassword(values.email, values.password)
        .catch(function(error) {
            //handle errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Incorrect password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
    console.log('User logged in successfully.');
    window.alert('Thanks for logging in! Click the logo in the header to return to the home page.');
}

export function register(values) {
    Firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
        .then(res => {
            Firebase.database()
                .ref('users/' + res.user.uid)
                .set({
                    uid: res.user.uid,
                    username: values.username,
                    email: values.email
                })
                .then(
                    Firebase.auth().onAuthStateChanged(user => {
                        if (user) {
                            user.updateProfile({displayName: values.username});
                        }
                    }),
                );
        })
}
