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
    InformacoesDoRestaurante
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
                    {restaurantes.filter(restau => restau.nome == nome).map(restauranteFiltrado => (
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

                            <TitleSession>Combos:</TitleSession>
                            <Cardapio>
                                {restauranteFiltrado.cardapio.map((item, index) => (
                                    <>
                                        <Combos key={index}>
                                            {item.combos.map((combo, comboIndex) => (
                                                <ProductCard key={comboIndex}>
                                                    <ImagemComida src={combo.src} alt={combo.name} />
                                                    <div>
                                                        <p>{combo.id}</p>
                                                        <h3>{combo.name}</h3>
                                                        <p>${combo.price}</p>
                                                    </div>
                                                    <AddCart onClick={() => adicionarAoCarrinho(combo, 'combo')}>
                                                        add to cart
                                                    </AddCart>
                                                </ProductCard>
                                            ))}
                                        </Combos>
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