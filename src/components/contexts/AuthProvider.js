import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

//create auth context
export const AuthContext = createContext();
//auth import from firebase config
const auth = getAuth(app)
//Google and github provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {

    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState({})
  //Create user with Email and Password
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //User Login with Email and Password
  const loginWithEmailPassword = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //User Profiel update
  const userProfileUpdate = (profile) => {
    setLoader(true);
    return updateProfile(auth.currentUser, profile);
  };
  //Google Sign in
  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider)
  }
  //Github Sign In
  const githubSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider)
  }
  //Log out user
  const logOut = () => {
    setLoader(true);
    return signOut(auth)
  }
  // User On Auth State Changed Observer
  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoader(false)
    })
    return () => {
        unsubscribe()
    }
  },[])
  //User all info pass context value
  const userInfo = {
    createUser,
    loginWithEmailPassword,
    userProfileUpdate,
    user,
    googleSignIn,
    githubSignIn,
    loader,
    logOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;