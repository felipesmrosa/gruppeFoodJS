import { signOut } from 'firebase/auth'
import { database } from '../../Services/firebaseConfig'
import { useNavigate } from 'react-router-dom'

import {
    Container
} from './styles'

export function Configuracoes() {

    const history = useNavigate()

    function handleClick() {
        signOut(database).then(val => {
            console.log(val)
            history('/')
        })
    } 

    return (
        <Container>
            <button onClick={handleClick}>Sair</button>
        </Container>
    )
}