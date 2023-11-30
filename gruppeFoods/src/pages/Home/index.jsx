import { Modal } from '../../components/Carrinho/ModalPagamento';
import {
    HighlightsForYou,
    Restaurants,
    Restaurant
} from './styles'

import { Link } from 'react-router-dom';

export function Home({
    restaurantes
}) {

    return (
        <div>
            <HighlightsForYou>
                <h3>Destaques:</h3>
                <Restaurants>
                    {restaurantes.map(restaurante => {
                        return (
                            < Restaurant key={restaurante.id} >
                                <Link to={`home/restaurante/${restaurante.nome}`}>
                                    <img src={restaurante.logo} alt="" />
                                    <div>
                                        <h3>{restaurante.nome}</h3>
                                        <p>Hamburgueria</p>
                                    </div>
                                </Link>
                            </Restaurant>
                        )
                    })}
                </Restaurants>
            </HighlightsForYou>
        </div >
    )
}