
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from './../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext =createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const provider = new GoogleAuthProvider();

const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const updateUserProfile = (user, name, photo) => {
    return updateProfile(user, {
      displayName : name,
    photoURL : photo,
    })
  };
  
const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
               // get and set token
               if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data =>{
                    // console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        logIn,
        googleLogIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;