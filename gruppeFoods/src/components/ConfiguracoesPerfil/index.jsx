import { useContext } from 'react'
import { AuthGoogleContext } from '../../contexts/authGoogle'
import {
    Container
} from './styles'

export function Configuracoes() {
    const { user, signOut } = useContext(AuthGoogleContext)

    return (
        <Container>
            <button onClick={() => signOut()}>Sair</button>
        </Container>
    )
}