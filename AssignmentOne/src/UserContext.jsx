import React, {createContext, useState, useContext, useEffect} from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import app from "./firebase/firebase"

const UserContext = createContext();
const auth = getAuth(app)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            setUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const register = (email, password) => {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setUser(userCredential.user)
                    resolve(userCredential.user)
                })
                .catch((error) => {
                    console.error("Registration error:", error)
                    reject(error)
                })
        })
    };
    
    const login = (email, password) => {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setUser(userCredential.user)
                    resolve(userCredential.user)
                })
                .catch((error) => {
                    console.error("Login error:", error)
                    reject(error)
                })
        })
    };
    
    const logout = () => {
        return signOut(auth).then(() => {
            setUser(null)
        });
    };
    
    return (
        <UserContext.Provider value={{ user, register, login, logout, loading }}>
        {children}
        </UserContext.Provider>
    );
}

export const useAuth = () => {
  return useContext(UserContext);
};