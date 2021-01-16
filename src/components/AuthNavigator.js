import Firebase from 'firebase';
import {firebaseConfig} from '../components/Firebase';
import React, {useState, useEffect, createContext} from 'react';
import App from "../App";

//expose user data to LogInStack ONLY when the user succesfully logs in
const AuthContext = createContext(null);

export default function AuthNavigator() {
    // initializing state variable keeps track of changes in authentication state
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    // Handle user state change and subscribe to auth changes when component is mounted
    useEffect(() => {
        const authSubscriber = Firebase.auth().onAuthStateChanged(result => {
            setUser(result);
            if (initializing) {
                setInitializing(false);
            }
        });
        console.log(authSubscriber);
        //unsubscribe on unmount
        return authSubscriber;
    }, [initializing]);

    if (initializing) {
        return null;
    }

    //directs to relevant stack dependant if user is logged in
    return user ? (
        <AuthContext.Provider value={user}>
            <App />
        </AuthContext.Provider>
    ) : (
        <App />
    );
}
