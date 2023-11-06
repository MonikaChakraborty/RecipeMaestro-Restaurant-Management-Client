import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from "../firebase/firebase.config"


export const AuthContext = createContext(null)


const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)

    }



    // register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }



    const authentications = {
        googleLogin,
        createUser,
        signIn,
        
    }


    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;