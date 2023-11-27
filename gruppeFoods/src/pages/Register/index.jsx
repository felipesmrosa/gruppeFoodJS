import { useState } from "react";
import { auth } from "../../Services/firebaseConfig";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function handleSignOut(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)

        console.log("Resgistrado com sucesso!")
        console.log("Email: ", email)
        console.log("Senha: ", password)
        return(
            <Navigate to="/home" />
        )

    }

    if (loading) {
        return (
            <>
                <p>Logando...</p>
            </>
        )
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    onClick={handleSignOut}
                >
                    Logar
                </button>
            </form>
        </>
    )
}