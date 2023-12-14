import { database } from '../../Services/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';

import {
    BotaoCadastrarLogar,
    ContainerFragment,
    Formulario,
    BarraLateral,
    ConteudoDeLogin,
    InputLoginECadastro,
    LogarOuCadastrar,
    Titulo,
    EsqueceuASenha
} from './styles'

import './Login.css'

export function Login() {
    const [login, setLogin] = useState(true)

    const history = useNavigate()

    function handleSubmit(e, type) {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        if (type === 'Cadastrar') {
            createUserWithEmailAndPassword(database, email, password).then(data => {
            }).catch(err => {
                toast.warning('Email já cadastrado', {
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
                setLogin(true)
            })
        } else {
            signInWithEmailAndPassword(database, email, password).then(data => {
                sessionStorage.setItem('userEmail', email); // Salvando o e-mail na sessão
                history('/home')
            }).catch(err => {
                toast.error('Email ou senha incorreto', {
                    position: "top-right",
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
    }

    function handleResetPassword() {
        history('/reset')
    }

    return (
        <ContainerFragment>
            <BarraLateral>

            </BarraLateral>

            <ConteudoDeLogin>
                <BotaoCadastrarLogar>
                    <div className={login ? 'ativarCor' : 'pointer'} onClick={() => setLogin(true)}>Logar</div>
                    <div className={!login ? 'ativarCor' : 'pointer'} onClick={() => setLogin(false)}>Cadastrar</div>
                </BotaoCadastrarLogar>
                <Titulo>{login ? 'Logar' : 'Cadastrar'}</Titulo>
                <Formulario onSubmit={(e) => handleSubmit(e, login ? 'Logar' : 'Cadastrar')}>
                    <InputLoginECadastro
                        name="email"
                        type="text"
                        placeholder="Email"
                        autocomplete="off"
                    />
                    <InputLoginECadastro
                        name="password"
                        type="password"
                        placeholder="Senha"
                        autocomplete="off"
                    />
                    {login && (
                        <EsqueceuASenha onClick={handleResetPassword}>Esqueceu sua senha?</EsqueceuASenha>
                    )}
                    <LogarOuCadastrar>{login ? 'Logar' : 'Cadastrar'}</LogarOuCadastrar>
                </Formulario>
            </ConteudoDeLogin>
        </ContainerFragment>
    )
}
