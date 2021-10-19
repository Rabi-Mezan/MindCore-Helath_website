import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import initAuth from "../firebase/firebase.init"


initAuth()
const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();


    //creating new user and  sign in using email password

    const createNewuser = (name, email, password) => {
        // console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setUsername(name);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                setError(alert('enter valid email and password'))
            })
    }

    // set username
    const setUsername = (name) => {
        updateProfile(auth.currentUser,
            { displayName: name })
            .then(result => { })
    }


    // sign in using google
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    // observe user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);

        })

    }, [])


    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return {
        user,
        setUser,
        isLoading,
        setError,
        setIsLoading,
        createNewuser,
        userLogin,
        setUsername,
        googleSignIn,
        logOut
    }



}

export default useFirebase;