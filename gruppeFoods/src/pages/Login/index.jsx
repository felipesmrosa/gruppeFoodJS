import { useContext, useState } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate } from "react-router-dom";
import { auth } from "../../Services/firebaseConfig";


export function Login() {
    const { signInGoogle, signed } = useContext(AuthGoogleContext)
    const { signInMail, signedMail } = useContext(AuthGoogleContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    async function handleSignIn() {
        await signInMail();
        signInWithEmailAndPassword(email, password)
    }

    if(loading) {
        return (
            <p>Logando...</p>
        )
    }
    if(error) {
        return(
            <p>Email ou senha incorretos.</p>
        )
    }

    async function loginGoogle() {
        await signInGoogle();
    }
    if (!signed) {
        return (
            <>
                <form>
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        onClick={handleSignIn}
                    >
                        Logar
                    </button>
                </form>
                <button onClick={loginGoogle}>Logar com o Google</button>
            </>
        )
    } else {
        return (
            <Navigate to="/home" />
        )
    }
}