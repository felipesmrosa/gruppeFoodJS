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

export function Carrinho({ handleToggleDiv, quantity }) {
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
                        <p>name</p>
                        <p>price</p>
                    </NomePreco>
                    <QuantidadeDeleter>
                        <p>quantity</p>
                        <button><TrashSimple /></button>
                    </QuantidadeDeleter>
                </ProdutosNoCarrinho>
                <ProdutosNoCarrinho>
                    <img src="../../src/images/comidas/lanches/Lanche01.jpg" alt="" />
                    <NomePreco>
                        <p>name</p>
                        <p>price</p>
                    </NomePreco>
                    <QuantidadeDeleter>
                        <p>quantity</p>
                        <button><TrashSimple /></button>
                    </QuantidadeDeleter>
                </ProdutosNoCarrinho>
                <ProdutosNoCarrinho>
                    <img src="../../src/images/comidas/lanches/Lanche01.jpg" alt="" />
                    <NomePreco>
                        <p>name</p>
                        <p>price</p>
                    </NomePreco>
                    <QuantidadeDeleter>
                        <p>quantity</p>
                        <button><TrashSimple /></button>
                    </QuantidadeDeleter>
                </ProdutosNoCarrinho>
                <ProdutosNoCarrinho>
                    <img src="../../src/images/comidas/lanches/Lanche01.jpg" alt="" />
                    <NomePreco>
                        <p>name</p>
                        <p>price</p>
                    </NomePreco>
                    <QuantidadeDeleter>
                        <p>quantity</p>
                        <button><TrashSimple /></button>
                    </QuantidadeDeleter>
                </ProdutosNoCarrinho>
                <ProdutosNoCarrinho>
                    <img src="../../src/images/comidas/lanches/Lanche01.jpg" alt="" />
                    <NomePreco>
                        <p>name</p>
                        <p>price</p>
                    </NomePreco>
                    <QuantidadeDeleter>
                        <p>quantity</p>
                        <button><TrashSimple /></button>
                    </QuantidadeDeleter>
                </ProdutosNoCarrinho>
            </Container>
        </>
    )
}