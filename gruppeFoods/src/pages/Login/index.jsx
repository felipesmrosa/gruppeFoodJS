import { database } from '../../Services/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import {
    BotaoCadastrarLogar,
    ContainerFragment,
    Formulario
} from './styles'

import './Login.css'

export function Login() {
    const [login, setLogin] = useState(true)

    const history = useNavigate()

    function handleSubmit(e, type) {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        if (type == 'Cadastrar') {
            createUserWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authData")
                alert(
                    email + ': cadastrado com sucesso! \n Clique no botão LOGAR e acesse sua conta!'
                )
            }).catch(err => {
                alert('Email ou senha já cadastrado')
                history('/')
                setLogin(true)
            })
        } else {
            signInWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authData")
                history('/home')
            }).catch(err => {
                alert('Email ou senha incorreto')
            })
        }
    }

    function handleResetPassword() {
        history('/reset')
    }

    return (
        <ContainerFragment>
            <h1>{login ? 'Logar' : 'Cadastrar'}</h1>
            <Formulario onSubmit={(e) => handleSubmit(e, login ? 'Logar' : 'Cadastrar')}>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Senha"
                />
                <button>{login ? 'Logar' : 'Cadastrar'}</button>
            </Formulario>
            <p onClick={handleResetPassword}>Esqueceu sua senha?</p>
            <BotaoCadastrarLogar>
                <div className={login == true ? 'ativarCor' : 'pointer'} onClick={() => setLogin(true)}>Logar</div>
                <div className={login == false ? 'ativarCor' : 'pointer'} onClick={() => setLogin(false)}>Cadastrar</div>
            </BotaoCadastrarLogar>
        </ContainerFragment>
    )
}