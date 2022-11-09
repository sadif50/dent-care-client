import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User With Email and Password
    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // Log in user with email and password
    const logInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign In With PopUp With Google
    const googleProviderLogIn = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // Log Out User
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // Update User Display Name and Photo URL
    const updateInfo = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }

    // Get Currently Signed In User Info
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);


    return (
        <AuthContext.Provider value={{user, loading, createUserWithEmail, updateInfo, logInWithEmail, googleProviderLogIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;