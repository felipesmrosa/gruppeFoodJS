import { signOut } from 'firebase/auth'
import { database } from '../../Services/firebaseConfig'
import { useNavigate } from 'react-router-dom'

import {
    Container,
    Botao,
    Fechar,
    Cabecalhozinho,
    Menu
} from './styles'
import { HistoricoDeCompras } from './HistoricoDeCompras'
import { XCircle } from 'phosphor-react'

export function Configuracoes({
    handleTogglePerfil
}) {

    const history = useNavigate()

    function Historico() {
        history('home/historico')
    }

    function LogOut() {
        signOut(database).then(val => {
            history('/')
        })
    }

    return (
        <Container>
            <Cabecalhozinho>
                <Fechar onClick={handleTogglePerfil}>
                    <XCircle />
                </Fechar>
            </Cabecalhozinho>
            <Menu>
                <Botao onClick={Historico}>Historico</Botao>
                <Botao onClick={LogOut}>Sair</Botao>
            </Menu>
        </Container>
    )
}