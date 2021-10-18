import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initAuth from "../firebase/firebase.init"


initAuth()
const useFirebase = () => {

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()


}