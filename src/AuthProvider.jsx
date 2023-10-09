import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./Firebase.init";
import { FirebaseError } from "firebase/app";
import { useLocation } from "react-router-dom";
export const AuthContext =createContext(null)

 const AuthProvider = ( {children}) => {
 const [loading,setLoading] =useState(true)  
const [user,setUser] =useState(null)
// const [name,setName] =useState(null)
// const [ph,setPh] =useState(null)

const createUser=(email,password)=>{
return createUserWithEmailAndPassword(auth, email, password)

}
  
   
const emailLogIn =(email,password)=>{
    setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
setUser(currentUser)
setLoading(false)
})
return ()=>{
    unSubscribe()
}
},[])

const LogOut=()=>{
    setLoading(true)
return signOut(auth)
}



    const AuthInfo={
createUser,
emailLogIn,
user,
LogOut,
loading,

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;