import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); //todo: make this true

    const auth = getAuth(app);

    // sign up user new using email ans pass
    const signUpEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login using existing user email and pass
    const loginEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google sigin
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // facebook login
    const facebookLogin = () => {
        const fbprovider = new FacebookAuthProvider();
        return signInWithPopup(auth, fbprovider)
    }

    // github login
    const githubLogin = () => {
        const gtprovider = new GithubAuthProvider();
        return signInWithPopup(auth, gtprovider)
    }


    // logout func
    const logout = () => {
        return signOut(auth);
    }
    // monitor/manage user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });

        return unsubscribe;
    }, [auth])

    const value = {
        user,
        signUpEmail,
        loginEmail,
        googleLogin,
        facebookLogin,
        githubLogin,
        logout,
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider; 