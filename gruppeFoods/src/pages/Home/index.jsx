import pizza from '../../images/pizza.png';
import lanches from '../../images/hamburguer.png';
import mercado from '../../images/mercado.png';
import bebidas from '../../images/bebidas.png';
import fastFood from '../../images/fastFood.png';
import doces from '../../images/doces.png';
import sushi from '../../images/sushi.png';
import padaria from '../../images/padaria.png';
import churrasco from '../../images/churrasco.png';

import best from '../../images/restaurantes/bestBurguer.jpg'
import rupper from '../../images/restaurantes/rupper.jpg'
import santo from '../../images/restaurantes/santo.jpg'
import xburguinho from '../../images/restaurantes/xburguinho.jpg'
import jungle from '../../images/restaurantes/jungle.jpg'

import {
    MenuInteractiveIcons,
    MenuItems,
    HighlightsForYou,
    Restaurants,
    Restaurant 
} from './styles'

import { Link } from 'react-router-dom';

export function Home() {
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
                <h3>Destaques:</h3>

                <Restaurants>
                    <Restaurant>
                        <Link to='/restaurant'>
                            <img src={jungle} alt="" />
                            <div>
                                <h3>Jungles Burguer</h3>
                                <p>- Hamburgueria</p>
                            </div>
                        </Link>
                    </Restaurant>
                    <Restaurant>
                        <Link to='/restaurant'>
                            <img src={best} alt="" />
                            <div>
                                <h3>Best Burguer</h3>
                                <p>- Hamburgueria</p>
                            </div>
                        </Link>
                    </Restaurant>
                    <Restaurant>
                        <Link to='/restaurant'>
                            <img src={rupper} alt="" />
                            <div>
                                <h3>Rupper's Burguer</h3>
                                <p>- Hamburgueria</p>
                            </div>
                        </Link>
                    </Restaurant>
                    <Restaurant>
                        <Link to='/restaurant'>
                            <img src={santo} alt="" />
                            <div>
                                <h3>Santo Burguer</h3>
                                <p>- Hamburgueria</p>
                            </div>
                        </Link>
                    </Restaurant>
                    <Restaurant>
                        <Link to='/restaurant'>
                            <img src={xburguinho} alt="" />
                            <div>
                                <h3>XBurguinho</h3>
                                <p>- Hamburgueria</p>
                            </div>
                        </Link>
                    </Restaurant>
                </Restaurants>
            </HighlightsForYou>
        </div>
    )
}