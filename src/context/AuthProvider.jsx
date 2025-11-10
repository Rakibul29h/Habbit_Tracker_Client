import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.inti';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading]=useState(true)
    const googleProvider= new GoogleAuthProvider;
    const googleSign=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const AuthInfo={
        googleSign,
        createUser,
        signIn,
        logOut,
        loading,
        setLoading,
        user,
        setUser,
        updateUser
    }
    return (
        <AuthContext value={AuthInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;