import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react/cjs/react.development";
import initAuth from "../firebase/firebase.init"


initAuth()
const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

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
        setIsLoading,
        googleSignIn,
        logOut
    }



}

export default useFirebase;