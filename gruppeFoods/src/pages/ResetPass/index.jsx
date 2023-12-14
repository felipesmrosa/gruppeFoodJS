import { sendPasswordResetEmail } from "firebase/auth"
import { database } from "../../Services/firebaseConfig"
import { Link, useNavigate } from "react-router-dom"

import {
    Container,
    BarraLateral,
    ConteudoDeResetarSenha,
    InputEmail,
    ResetarSenha,
    LINKVOLTAR
} from './styles'
import { Formulario, Titulo } from "../Login/styles"

import { ToastContainer, toast } from 'react-toastify';

export function ResetPass() {
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const emailVal = e.target.email.value
        sendPasswordResetEmail(database, emailVal).then(data => {
            toast.success('Um link foi enviado para seu email', {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            history('/')
        }).catch(err => {
            toast.error('Email não encontrado! \nInsira seu email novamente', {
                position: "top-left",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
    }
    return (
        <>
            <LINKVOLTAR>
                <Link to='/'>⬅VOLTAR</Link>
            </LINKVOLTAR>
            <Container>
                <ConteudoDeResetarSenha>
                    <Titulo>Alterar Senha</Titulo>
                    <Formulario onSubmit={(e) => handleSubmit(e)}>
                        <InputEmail
                            name="email"
                            placeholder="Digite seu email"
                            autocomplete="off"
                        />
                        <ResetarSenha>Resetar</ResetarSenha>
                    </Formulario>
                </ConteudoDeResetarSenha>

                <BarraLateral>

                </BarraLateral>
            </Container>
            <ToastContainer
                position="top-left"
                autoClose={900}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}