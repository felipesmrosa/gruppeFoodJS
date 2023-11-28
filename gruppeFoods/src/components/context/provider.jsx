import { useState } from "react"
import AppContext from './AppContext';
import propTypes from 'prop-types';

export function Provider({ children }) {
    const [cartItem, setCartItem] = useState([]);

    const cart = {
        cartItem,
        setCartItem
    }

    return (
        <AppContext.Provider cart={cart}>
            {children}
        </AppContext.Provider>
    )
}

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;