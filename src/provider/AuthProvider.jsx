import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState(true);

    // console.log(user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = async (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                const userData = { email: currentUser.email };

                axios.post('https://btobridge-server.vercel.app/jwt', userData, {
                    withCredentials: true,
                })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => console.log(error));
            }
        });
        return () => {
            unsubscribe();
        };
    }, [])

    const authData = {

        list,
        setList,
        user,
        setUser,
        createUser,
        signIn,
        signInWithGoogle,
        updateUser,
        logOut,
        loading,
        setLoading,
    };

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;