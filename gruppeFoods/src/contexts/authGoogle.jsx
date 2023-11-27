import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../Services/firebaseConfig";
import { Navigate } from "react-router-dom";
const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})

export function AuthGoogleProvider({ children }) {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    useEffect(() => {
        function loadStorageAuth() {
            const sessionToken = sessionStorage.getItem("@AuthFirebase: token");
            const sessionUser = sessionStorage.getItem("@AuthFirebase: user");
            if (sessionToken && sessionUser) {
                setUser(sessionUser)
            }
        }
        loadStorageAuth();
    }, [])


    function signInGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)
                sessionStorage.setItem('@AuthFirebase: token', token)
                sessionStorage.setItem('@AuthFirebase: user', JSON.stringify(user))
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

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

    function signOut() {
        sessionStorage.clear()
        setUser(null)

        return (
            <Navigate to="/" />
        )
    }
    return (
        <AuthGoogleContext.Provider value={{ signInWithEmailAndPasswordHandler, signUpWithEmailAndPasswordHandler, signInGoogle, signed: !!user, user, signOut }}>
            {children}
        </AuthGoogleContext.Provider>
    )
}