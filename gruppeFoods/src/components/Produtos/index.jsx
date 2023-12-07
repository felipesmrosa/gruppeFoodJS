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
    DivComida
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
                    {restaurantes.filter(restau => restau.id === restau.id).map(restauranteFiltrado => (
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
                                                <ImagemComida src={item.src} alt={item.nameItem} />
                                            </DivComida>
                                            <div>
                                                <h3>{item.nameItem}</h3>
                                                <p>${item.priceItem}</p>
                                            </div>
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