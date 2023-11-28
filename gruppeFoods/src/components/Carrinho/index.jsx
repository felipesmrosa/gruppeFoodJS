import {
    Container,
    FecharCarrinho,
    HeaderCarrinho,
    QuantidadePrecoEItem,
    ProdutosNoCarrinho,
    NomePreco,
    QuantidadeDeleter
} from './styles'

import { TrashSimple, XCircle } from 'phosphor-react'

export function Carrinho({ handleToggleDiv, quantity, cart }) {
    const handleRemoveItem = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        // Força a atualização do componente para refletir a mudança no carrinho
        // window.location.reload();

        console.log(localStorage)
    }
    return (
        <>
            <Container>
                <HeaderCarrinho>
                    <FecharCarrinho onClick={handleToggleDiv}>
                        <XCircle />
                    </FecharCarrinho>
                    <QuantidadePrecoEItem>
                        <h2>Total price: </h2>
                        <h4>Itens: {quantity}</h4>
                    </QuantidadePrecoEItem>
                </HeaderCarrinho>
                <hr />
                <ProdutosNoCarrinho>
                        <img src="../../src/images/comidas/lanches/Lanche01.jpg" alt="" />
                        <NomePreco>
                            <p>Lanche01</p>
                            <p>$12</p>
                        </NomePreco>
                        <QuantidadeDeleter>
                            <p>1</p>
                            <button onClick={handleRemoveItem}><TrashSimple /></button>
                        </QuantidadeDeleter>
                    </ProdutosNoCarrinho>

                {/* {cart.map(item => (
                    <ProdutosNoCarrinho key={item.id}>
                        <img src="../../src/images/comidas/lanches/Lanche01.jpg" alt="" />
                        <NomePreco>
                            <p>{item.nome}</p>
                            <p>{item.price}</p>
                        </NomePreco>
                        <QuantidadeDeleter>
                            <p>{item.quantity}</p>
                            <button onClick={handleRemoveItem}><TrashSimple /></button>
                        </QuantidadeDeleter>
                    </ProdutosNoCarrinho>
                ))} */}
            </Container>
        </>
    )
}