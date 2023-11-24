import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { InsideRestaurant } from './pages/InsideRestaurant'
import { useEffect, useState } from 'react';
import { Login } from './pages/Login';
import { PrivateRoutes } from './PrivateRoutes';
import { RegisterYourRestaurant } from './components/ContentFooter/RegisterYourRestaurant';

export function Router({
    restaurantes,
    setRestaurantes,
    // infos,
    // setInfos,
    criarRestaurante,
    nome,
    setNome
}) {

    // Obtendo o valor do localStorage ou definindo como 0 se não existir
    const [quantity, setQuantity] = useState(parseInt(localStorage.getItem('quantity'), 10) || 0);

    // Função para atualizar o localStorage quando o quantity mudar
    useEffect(() => {
        localStorage.setItem('quantity', quantity.toString());
    }, [quantity]);

    // Função para aumentar a quantidade (pode ser um botão no seu código real)
    function handleAddItemInCart() {
        setQuantity(quantity + 1);
    };

    // Função para diminuir a quantidade (pode ser um botão no seu código real)
    function handleDelItemInCart() {
        setQuantity(quantity - 1);
    };

    const combos = [
        {
            id: 1,
            src: '../../src/images/comidas/combos/combo01.jpg',
            name: "Combo 01",
            price: 10
        },
        {
            id: 2,
            src: '../../src/images/comidas/combos/combo02.jpg',
            name: "Combo 02",
            price: 11
        },
        {
            id: 3,
            src: '../../src/images/comidas/combos/combo03.jpg',
            name: "Combo 03",
            price: 17
        },
        {
            id: 4,
            src: '../../src/images/comidas/combos/combo04.jpg',
            name: "Combo 04",
            price: 13
        },
        {
            id: 5,
            src: '../../src/images/comidas/combos/combo05.jpg',
            name: "Combo 05",
            price: 12
        },
        {
            id: 6,
            src: '../../src/images/comidas/combos/combo01.jpg',
            name: "Combo 123",
            price: 128
        }
    ]
    const lanches = [
        {
            id: 1,
            src: '../../src/images/comidas/lanches/Lanche01.jpg',
            name: "Lanche 01",
            price: 10
        },
        {
            id: 2,
            src: '../../src/images/comidas/lanches/Lanche02.jpg',
            name: "Lanche 02",
            price: 11
        },
        {
            id: 3,
            src: '../../src/images/comidas/lanches/Lanche03.jpg',
            name: "Lanche 03",
            price: 17
        },
        {
            id: 4,
            src: '../../src/images/comidas/lanches/Lanche04.jpg',
            name: "Lanche 04",
            price: 13
        },
        {
            id: 5,
            src: '../../src/images/comidas/lanches/Lanche05.jpg',
            name: "Lanche 05",
            price: 12
        },
    ]
    const porcoes = [
        {
            id: 1,
            src: '../../src/images/comidas/porcoes/porcao01.jpg',
            name: "Porção 01",
            price: 10
        },
        {
            id: 2,
            src: '../../src/images/comidas/porcoes/porcao02.jpg',
            name: "Porção 02",
            price: 11
        },
        {
            id: 3,
            src: '../../src/images/comidas/porcoes/porcao03.jpg',
            name: "Porção 03",
            price: 17
        },
        {
            id: 4,
            src: '../../src/images/comidas/porcoes/porcao04.jpg',
            name: "Porção 04",
            price: 13
        },
        {
            id: 5,
            src: '../../src/images/comidas/porcoes/porcao05.jpg',
            name: "Porção 05",
            price: 12
        },
        {
            id: 6,
            src: '../../src/images/comidas/porcoes/porcao05.jpg',
            name: "Porção 42",
            price: 521
        }
    ]
    const sobremesas = [
        {
            id: 1,
            src: '../../src/images/comidas/sobremesas/sobremesa01.jpg',
            name: "Sobremesa 01",
            price: 10
        },
        {
            id: 2,
            src: '../../src/images/comidas/sobremesas/sobremesa02.jpg',
            name: "Sobremesa 02",
            price: 11
        },
        {
            id: 3,
            src: '../../src/images/comidas/sobremesas/sobremesa03.jpg',
            name: "Sobremesa 03",
            price: 17
        },
        {
            id: 4,
            src: '../../src/images/comidas/sobremesas/sobremesa04.jpg',
            name: "Sobremesa 04",
            price: 13
        },
        {
            id: 5,
            src: '../../src/images/comidas/sobremesas/sobremesa05.jpg',
            name: "Sobremesa 05",
            price: 12
        },
    ]
    const bebidas = [
        {
            id: 1,
            src: '../../src/images/comidas/bebidas/bebidas01.jpg',
            name: "Bebida 01",
            price: 10
        },
        {
            id: 2,
            src: '../../src/images/comidas/bebidas/bebidas02.jpg',
            name: "Bebida 02",
            price: 11
        },
        {
            id: 3,
            src: '../../src/images/comidas/bebidas/bebidas03.jpg',
            name: "Bebida 03",
            price: 17
        },
        {
            id: 4,
            src: '../../src/images/comidas/bebidas/bebidas04.jpg',
            name: "Bebida 04",
            price: 13
        },
        {
            id: 5,
            src: '../../src/images/comidas/bebidas/bebidas05.jpg',
            name: "Bebida 05",
            price: 12
        },
    ]

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<DefaultLayout quantity={quantity} />}>
                <Route path='/home' element={<PrivateRoutes />}>
                    <Route path='/home/' element={<Home
                        // infos={infos}
                        // setInfos={setInfos}
                        nome={nome}
                        setNome={setNome}

                        restaurantes={restaurantes}
                        setRestaurantes={setRestaurantes} />} />
                    <Route
                        path='home/restaurant'
                        element={
                            <InsideRestaurant
                                combos={combos}
                                lanches={lanches}
                                porcoes={porcoes}
                                sobremesas={sobremesas}
                                bebidas={bebidas}
                                handleDelItemInCart={handleDelItemInCart}
                                quantity={quantity}
                                handleAddItemInCart={handleAddItemInCart}
                            />}
                    />
                    <Route
                        path='home/registerRestaurant'
                        element={
                            <RegisterYourRestaurant
                                nome={nome}
                                setNome={setNome}
                                // infos={infos}
                                // setInfos={setInfos}
                                criarRestaurante={criarRestaurante}
                            />
                        }
                    >

                    </Route>
                </Route>

            </Route>
        </Routes >
    )
}