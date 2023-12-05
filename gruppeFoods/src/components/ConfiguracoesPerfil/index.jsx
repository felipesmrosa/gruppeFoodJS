import { signOut } from 'firebase/auth'
import { database } from '../../Services/firebaseConfig'
import { useNavigate } from 'react-router-dom'

import {
    Container,
    Botao
} from './styles'
import { HistoricoDeCompras } from './HistoricoDeCompras'

export function Configuracoes() {

    const history = useNavigate()

    function Historico() {
        history('home/historico')
    }

    function LogOut() {
        signOut(database).then(val => {
            console.log(val)
            history('/')
        })
    }

    return (
        <Container>
            <Botao onClick={Historico}>Historico</Botao>
            <Botao onClick={LogOut}>Sair</Botao>
        </Container>
    )
}