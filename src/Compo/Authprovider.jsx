import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)

    const signUp = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        signOut(auth)
    }

    useEffect(()=>{
       const unsubcribe =  onAuthStateChanged(auth, user =>{
        setUser(user)
        console.log(user)
       })
       return ()=>{
        unsubcribe()
       }
    },[])

  





    const userInfo = {
        signUp, 
        logIn, 
        logOut,
        user
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;