import { Produto } from '../../components/Produtos';
import { QuantidadeJaDentroDoCarrinho } from './styles';
import { useParams } from 'react-router-dom';

export function InsideRestaurant({
    quantity,
    combos,
    lanches,
    porcoes,
    sobremesas,
    bebidas,
    restaurantes,
    carrinho,
    setCarrinho,
    adicionarAoCarrinho,
    removerDoCarrinho,
    porcoesCarrinho,
    setPorcoesCarrinho,
}) {

    const { nome } = useParams();

    return (
        <>
            <Produto
                restaurantes={restaurantes}

                nome={nome}

                quantity={quantity}
                combos={combos}
                lanches={lanches}
                porcoes={porcoes}
                sobremesas={sobremesas}
                bebidas={bebidas}

                carrinho={carrinho}
                setCarrinho={setCarrinho}
                adicionarAoCarrinho={adicionarAoCarrinho}
                removerDoCarrinho={removerDoCarrinho}
                porcoesCarrinho={porcoesCarrinho}
                setPorcoesCarrinho={setPorcoesCarrinho}
            />

            {quantity > 0 && <QuantidadeJaDentroDoCarrinho>{quantity}</QuantidadeJaDentroDoCarrinho>}
        </>
    )
}