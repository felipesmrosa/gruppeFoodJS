import { Produto } from '../../components/Produtos';
import { QuantidadeJaDentroDoCarrinho } from './styles';
import { useParams } from 'react-router-dom';

export function InsideRestaurant({
    quantity,
    handleAddItemInCart,
    handleDelItemInCart,
    combos,
    lanches,
    porcoes,
    sobremesas,
    bebidas,
    restaurantes,
    logo
}) {

    const { nome } = useParams();

    return (
        <>
            <Produto
                restaurantes={restaurantes}   
                logo={logo} 

                nome={nome}
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