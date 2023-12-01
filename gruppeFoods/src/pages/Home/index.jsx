import { Modal } from '../../components/Carrinho/ModalPagamento';
import {
    HighlightsForYou,
    Restaurants,
    Restaurant,
    Logo
} from './styles'

import { Link } from 'react-router-dom';

export function Home({
    restaurantes
}) {

    const destaquesEmbaralhados = restaurantes.sort(() => Math.random() - 0.5);

    const destaques = destaquesEmbaralhados.slice(0, 5);

    return (
        <div>
            <HighlightsForYou>
                <h3>Destaques:</h3>
                <Restaurants>
                    {destaques.map(restaurante => {
                        return (
                            <Restaurant key={restaurante.id} >
                                <Link to={`home/restaurante/${restaurante.nome}`}>
                                    <Logo src={restaurante.logo} alt="" />
                                    <div>
                                        <h3>{restaurante.nome}</h3>
                                        <p>Hamburgueria</p>
                                    </div>
                                </Link>
                            </Restaurant>
                        )
                    })}
                </Restaurants>
                <h3>Hamburguerias:</h3>
                <Restaurants>
                    {restaurantes.map(restaurante => {
                        return (
                            <Restaurant key={restaurante.id} >
                                <Link to={`home/restaurante/${restaurante.nome}`}>
                                    <Logo src={restaurante.logo} alt="" />
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