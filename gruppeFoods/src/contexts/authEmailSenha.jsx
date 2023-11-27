import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Services/firebaseConfig";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    useEffect(() => {
        function loadStorageAuth() {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
            if (sessionToken && sessionUser) {
                setUser(JSON.parse(sessionUser));
            }
        }
        loadStorageAuth();
    }, []);

    function signInWithEmailAndPasswordHandler(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                sessionStorage.setItem('@AuthFirebase:token', 'your_custom_token_here'); // Você pode armazenar um token personalizado aqui, se necessário
                sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
            });
    }

    function signUpWithEmailAndPasswordHandler(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                sessionStorage.setItem('@AuthFirebase:token', 'your_custom_token_here'); // Você pode armazenar um token personalizado aqui, se necessário
                sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
            });
    }

    return (
        <AuthContext.Provider value={{ signInWithEmailAndPasswordHandler, signUpWithEmailAndPasswordHandler, signed: !!user, user }}>
            {children}
        </AuthContext.Provider>
    );
}