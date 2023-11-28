import { sendPasswordResetEmail } from "firebase/auth"
import { database } from "../../Services/firebaseConfig"
import { useNavigate } from "react-router-dom"

export function ResetPass() {
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const emailVal = e.target.email.value
        sendPasswordResetEmail(database, emailVal).then(data => {
            alert("Para resetar sua senha, você deve checar seu email")
            history('/')
        }).catch(err => {
            alert('Email não encontrado! \nInsira seu email novamente')
        })
    }
    return (
        <div>
            <h1>Alterar Senha</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="email" />
                <button>Reset</button>
            </form>
        </div>
    )
}