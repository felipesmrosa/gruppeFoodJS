import { useContext, useState } from 'react'
import {
    ContainerProdutos,
    Combos,
    ProductCard,
    Lanches,
    Porcoes,
    Sobremesas,
    Bebidas,
    TitleSession,
    ImagemComida,
    AddCart,
    InfosRestaurante,
    LogoRestaurante,
    Cardapio,
    InformacoesDoRestaurante,
    DivComida,
    Descricao,
    InfosDoProduto
} from './styles'

export function Produto({
    combos,
    lanches,
    porcoes,
    sobremesas,
    bebidas,
    carrinho,
    setCarrinho,
    adicionarAoCarrinho,
    removerDoCarrinho,
    porcoesCarrinho,
    setPorcoesCarrinho,
    restaurantes,
    nome
}) {

    return (
        <>
            <ContainerProdutos>

                <InfosRestaurante>
                    {restaurantes.filter(restau => restau.nome === nome).map(restauranteFiltrado => (
                        <div key={restauranteFiltrado.id}>
                            <InformacoesDoRestaurante>
                                <LogoRestaurante src={restauranteFiltrado.logo} alt="" />
                                <p>{restauranteFiltrado.nome}</p>
                                <p>{restauranteFiltrado.endereco}, {restauranteFiltrado.bairro} - {restauranteFiltrado.cidade}</p>
                                <br />
                                <p>Telefone para Contato</p>
                                <p>{restauranteFiltrado.telefone}</p>
                                <br />
                                <p>Horário de funcionamento</p>
                                <p>{restauranteFiltrado.horarioFuncionamentoI} - {restauranteFiltrado.horarioFuncionamentoF}</p>
                            </InformacoesDoRestaurante>

                            <TitleSession>Mais pedidos:</TitleSession>
                            <Cardapio>
                                {restauranteFiltrado.cardapio.map((item) => (
                                    <>
                                        <ProductCard key={item.id}>
                                            <DivComida>
                                                <ImagemComida src={item.imagemProduto} alt={item.nomeDoProduto} />
                                            </DivComida>
                                            <InfosDoProduto>
                                                <h3>{item.nomeDoProduto}</h3>
                                                <p>${item.precoDoProduto}</p>
                                            </InfosDoProduto>
                                            <AddCart onClick={() => adicionarAoCarrinho(item, 'combo')}>
                                                add to cart
                                            </AddCart>
                                        </ProductCard>
                                    </>
                                ))}
                            </Cardapio>
                        </div>
                    ))}
                </InfosRestaurante>
            </ContainerProdutos >
        </>
    )
}