import styled, { keyframes } from "styled-components";
import { useEffect, useState } from 'react'
import {
    ProductCard,
    TitleSession,
    ImagemComida,
    AddCart,
    InfosRestaurante,
    LogoRestaurante,
    Cardapio,
    InformacoesDoRestaurante,
    DivComida,
    InfosDoProduto,
    LogoENome,
    InformacoesAMais,
    TelefoneEHorario,
} from './styles'

export function Produto({
    adicionarAoCarrinho,
    restaurantes,
    nome
}) {


    const preencherBackground = keyframes`
        from {
            background-color: #f9a01b;
            border: 3px solid #fff;
            color: #fff;
        }
        to {
            background-color: #fff;
            border: 3px solid #f9a01b;
            color: #f9a01b;
        }
    `;

    const Seguir = styled.button`
        padding: 0.7rem 1.7rem;
        border-radius: 9px;
        text-transform: uppercase;
        font-weight: 600;

        cursor: pointer;
        background-color: ${props => (props.seguindo ? '#fff' : '#f9a01b')};
        transition: background-color 1s ease;
        border: none;
        color: #fff;


        /* Aplicando a animação quando a classe 'animar' estiver presente */
        &.animar {
            animation: ${preencherBackground} 1s forwards; /* Mantém o estado final da animação */
        }
    `

    const [seguindo, setSeguindo] = useState(
        sessionStorage.getItem('seguindo') === 'true'
    );

    useEffect(() => {
        localStorage.setItem('seguindo', seguindo);
    }, [seguindo]);

    function handleSeguirClick() {
        const novoEstado = !seguindo;
        setSeguindo(novoEstado);
        sessionStorage.setItem('seguindo', novoEstado.toString());
    };

    return (
        <>
            {
                restaurantes.filter(restau => restau.nome === nome).map(restauranteFiltrado => (
                    <InfosRestaurante key={restauranteFiltrado.id}>
                        <InformacoesDoRestaurante>
                            <LogoENome>
                                <LogoRestaurante src={restauranteFiltrado.logo} alt="" />
                                <p>{restauranteFiltrado.nome}</p>
                            </LogoENome>
                            <Seguir
                                onClick={handleSeguirClick} seguindo={seguindo} className={seguindo ? 'animar' : ''}
                            >
                                {seguindo ? 'Seguindo' : 'Seguir'}
                            </Seguir>
                            <p>{restauranteFiltrado.endereco}</p>
                            <p>{restauranteFiltrado.bairro} - {restauranteFiltrado.cidade}</p>
                            <TelefoneEHorario>
                                <h6>Telefone para Contato</h6>
                                <InformacoesAMais>{restauranteFiltrado.telefone}</InformacoesAMais>
                                <h6>Horário de funcionamento</h6>
                                <InformacoesAMais>{restauranteFiltrado.horarioFuncionamentoI} à {restauranteFiltrado.horarioFuncionamentoF}</InformacoesAMais>
                            </TelefoneEHorario>
                        </InformacoesDoRestaurante>

                        <TitleSession>Mais pedidos:</TitleSession>
                        <Cardapio>
                            {restauranteFiltrado.novoItem.map((item) => (
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
                    </InfosRestaurante>
                ))
            }
        </>
    )
}