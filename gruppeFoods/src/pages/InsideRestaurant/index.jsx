import { Produto } from '../../components/Produtos';
import { QuantidadeJaDentroDoCarrinho } from './styles';

export function InsideRestaurant({
    quantity,
    handleAddItemInCart,
    handleDelItemInCart,
    combos,
    lanches,
    porcoes,
    sobremesas,
    bebidas
}) {

    return (
        <>
            <Produto
                quantity={quantity}
                handleAddItemInCart={handleAddItemInCart}
                handleDelItemInCart={handleDelItemInCart}
                combos={combos}
                lanches={lanches}
                porcoes={porcoes}
                sobremesas={sobremesas}
                bebidas={bebidas}
            />

            {quantity > 0 && <QuantidadeJaDentroDoCarrinho>{quantity}</QuantidadeJaDentroDoCarrinho>}
        </>
    )
}