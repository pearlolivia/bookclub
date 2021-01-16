import Firebase from 'firebase';
import 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyBqtnG636jIrQnGaGFnWYhCqkGUavLmdfo",
    authDomain: "bookclub-4b029.firebaseapp.com",
    projectId: "bookclub-4b029",
    storageBucket: "bookclub-4b029.appspot.com",
    messagingSenderId: "995047942413",
    appId: "1:995047942413:web:82ba04356925a88c86a844"
};

Firebase.initializeApp(firebaseConfig);
