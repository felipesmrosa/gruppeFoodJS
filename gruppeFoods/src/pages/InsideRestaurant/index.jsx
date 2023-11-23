import { Produto } from '../../components/Produtos';
import { QuantidadeJaDentroDoCarrinho } from './styles';

export function InsideRestaurant({ quantity, handleAddItemInCart, handleDelItemInCart }) {

    return (
        <>
            <Produto quantity={quantity} handleAddItemInCart={handleAddItemInCart} handleDelItemInCart={handleDelItemInCart} />

            {quantity > 0 && <QuantidadeJaDentroDoCarrinho>{quantity}</QuantidadeJaDentroDoCarrinho>}
        </>
    )
}