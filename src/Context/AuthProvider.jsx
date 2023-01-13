import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/Firebase.confiq';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loader, setLoader] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [signedinUser, setSignedinUser] = useState(false)
    const [cartCount, setCartCount] = useState(0)

    const googleLogin = provider => {
        setLoader(true)
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateName = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        });

        return () => unsubscribe;
    }, [])

    const authInfo = { user, loader, setLoader, showCart, setShowCart, googleLogin, createUser, logOut, updateName, login, setSignedinUser, signedinUser, setCartCount, cartCount }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;