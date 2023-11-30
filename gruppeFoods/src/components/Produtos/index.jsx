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
    Demonho,
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
                                <p>{restauranteFiltrado.horarioFuncionamento[0]} - {restauranteFiltrado.horarioFuncionamento[1]}</p>
                            </InformacoesDoRestaurante>

                            <TitleSession>Combos:</TitleSession>
                            <Demonho>
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
                            </Demonho>
                        </div>
                    ))}
                </InfosRestaurante>

                {/* <TitleSession>Lanches</TitleSession>
                <Lanches>
                    {lanches.map((lanche) => (
                        <ProductCard key={lanche.id}>
                            <ImagemComida src={lanche.src} alt={lanche.name} />
                            <div>
                                <h3>{lanche.name}</h3>
                                <p>${lanche.price}</p>
                            </div>
                            <AddCart>
                                add to cart
                            </AddCart>
                        </ProductCard>
                    ))}
                </Lanches> */}

                <TitleSession>Porções</TitleSession>
                <Porcoes>
                    {porcoes.map((porcao) => (
                        <ProductCard key={porcao.id}>
                            <ImagemComida src={porcao.src} alt={porcao.name} />
                            <div>
                                <h3>{porcao.name}</h3>
                                <p>${porcao.price}</p>
                            </div>
                            <AddCart onClick={() => adicionarAoCarrinho(porcao, 'porcao')}>
                                add to cart
                            </AddCart>
                        </ProductCard>
                    ))}
                </Porcoes>

                {/* <TitleSession>Sobremesas</TitleSession>
                <Sobremesas>
                    {sobremesas.map((sobremesa) => (
                        <ProductCard key={sobremesa.id}>
                            <ImagemComida src={sobremesa.src} alt={sobremesa.name} />
                            <div>
                                <h3>{sobremesa.name}</h3>
                                <p>${sobremesa.price}</p>
                            </div>
                            <AddCart>
                                add to cart
                            </AddCart>
                        </ProductCard>
                    ))}
                </Sobremesas>

                <TitleSession>Bebidas</TitleSession>
                <Bebidas>
                    {bebidas.map((bebida) => (
                        <ProductCard key={bebida.id}>
                            <ImagemComida src={bebida.src} alt={bebida.name} />
                            <div>
                                <h3>{bebida.name}</h3>
                                <p>${bebida.price}</p>
                            </div>
                            <AddCart>
                                add to cart
                            </AddCart>
                        </ProductCard>
                    ))}
                </Bebidas> */}
            </ContainerProdutos >
        </>
    )
}