import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { InsideRestaurant } from './pages/InsideRestaurant'
import { useEffect, useState } from 'react';

export function Router() {
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

    return (
        <Routes>
            <Route path='/' element={<DefaultLayout quantity={quantity}/>}>
                <Route path='/' element={<Home />} />
                <Route path='/restaurant' element={<InsideRestaurant handleDelItemInCart={handleDelItemInCart} quantity={quantity} handleAddItemInCart={handleAddItemInCart} />} />
            </Route>
        </Routes>
    )
}