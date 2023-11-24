import pizza from '../../images/pizza.png';
import lanches from '../../images/hamburguer.png';
import mercado from '../../images/mercado.png';
import bebidas from '../../images/bebidas.png';
import fastFood from '../../images/fastFood.png';
import doces from '../../images/doces.png';
import sushi from '../../images/sushi.png';
import padaria from '../../images/padaria.png';
import churrasco from '../../images/churrasco.png';

import {
    MenuInteractiveIcons,
    MenuItems,
    HighlightsForYou,
    Restaurants,
    Restaurant
} from './styles'

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthGoogleContext } from '../../contexts/authGoogle';

export function Home({
    restaurantes,
    setRestaurantes,
    infos,
    setInfos
}) {
    
    const { user, signOut } = useContext(AuthGoogleContext)

    return (
        <div>
            <MenuInteractiveIcons>
                <MenuItems>
                    <img src={pizza} alt="" />
                    <p>Pizza</p>
                </MenuItems>
                <MenuItems>
                    <img src={lanches} alt="" />
                    <p>Lanches</p>
                </MenuItems>
                <MenuItems>
                    <img src={mercado} alt="" />
                    <p>Mercado</p>
                </MenuItems>
                <MenuItems>
                    <img src={bebidas} alt="" />
                    <p>Bebidas</p>
                </MenuItems>
                <MenuItems>
                    <img src={fastFood} alt="" />
                    <p>Fast Food</p>
                </MenuItems>
                <MenuItems>
                    <img src={doces} alt="" />
                    <p>Doces</p>
                </MenuItems>
                <MenuItems>
                    <img src={sushi} alt="" />
                    <p>Sushi</p>
                </MenuItems>
                <MenuItems>
                    <img src={padaria} alt="" />
                    <p>Padaria</p>
                </MenuItems>
                <MenuItems>
                    <img src={churrasco} alt="" />
                    <p>Churrasco</p>
                </MenuItems>
            </MenuInteractiveIcons>

            <HighlightsForYou>
                <button onClick={() => signOut()}>Sair</button>
                <h3>Destaques:</h3>

                <Restaurants>
                    {restaurantes.map(restaurante => {
                        return (
                            <Restaurant key={restaurante.id}>
                                <Link to='home/restaurant'>
                                    <p>{restaurante.id}</p>
                                    <img src={restaurante.logo} alt="" />
                                    <div>
                                        <h3>{restaurante.nome}</h3>
                                        <p>{restaurante.mercadoria}</p>
                                    </div>
                                </Link>
                            </Restaurant>
                        )
                    })}
                </Restaurants>
            </HighlightsForYou>
        </div>
    )
}