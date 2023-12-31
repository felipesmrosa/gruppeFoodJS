import styled from "styled-components";

export const Dados = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
        text-align: center;
    }
`
export const InfosDoProduto = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const InformacoesAMais = styled.p`
    font-size: 1.15rem;
`
export const TelefoneEHorario = styled.span`
    text-align: center;
`
export const LocalDoRestaurante = styled.div`

`
export const LogoENome = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex;
    flex-direction: column;
    gap: .2rem;

    font-weight: 600;
    text-transform: uppercase;
`

export const Descricao = styled.p`
    overflow-y: auto;
    height: 4rem;
    font-size: 0.9rem;
    letter-spacing: 0;
    width: 22%;
    line-height: 16px;
    word-break: break-word;

    &::-webkit-scrollbar {
        width: 10px;               /* width of the entire scrollbar */
    }
    &::-webkit-scrollbar-track {
        background: #cacaca;       /* color of the tracking area */
        border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff3939;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 2px solid #cacaca;  /* creates padding around scroll thumb */
    }
`
export const DivComida = styled.div`
    width: 20vh;
    height: 20vh;
    border-radius: 7px;
    border: 2px solid #ff3939;
    margin: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Cardapio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 4rem;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 1024px) {
        margin: 0 8rem;
        margin-bottom: 1.5rem;
    }
    @media screen and (min-width: 1530px) {
        margin: 0 14rem;
        margin-bottom: 2rem;
    }
`
export const LogoRestaurante = styled.img`
    border-radius: 50%;
    width: 15vh;
    height: 15vh;
`
export const InformacoesDoRestaurante = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1.5rem;
    background: white;
    width: 100%;
    box-shadow: 0px 8px 36px -18px #000;
    padding: 1rem;
    gap: 0.6rem;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        gap: 4rem;
    }
`
export const ContainerProdutos = styled.div`
    margin: 2rem 15rem;
    margin-bottom: 1rem;
    max-width: 100%;
`

export const InfosRestaurante = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    flex-direction: column;
`

export const Teste = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const TitleSession = styled.h3`
    text-transform: uppercase;
    font-weight: bold;
    color: red;
    margin-bottom: 0.5rem;
`

export const ImagemComida = styled.img`
    width: 20vh;
    height: 20vh;
    border-radius: 10px;
    padding: 0.3rem;
`

export const Combos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin: 1rem 0;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: row;
`

export const ProductCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: white;
    width: 90%;
    border-radius: 8px;
    border: 1px solid #cecece;
    padding: 0.5rem 0.3rem;
    box-shadow: 0px 0px 8px -2px #000;
    text-transform: uppercase;

    @media screen and (min-width: 1024px) {
        width: 26%;
    }
    @media screen and (min-width: 1530px) {
        width: auto;
    }
`

export const Lanches = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`

export const Lanche = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Porcoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`

export const Porcao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

export const Sobremesas = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`

export const Sobremesa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Bebidas = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`

export const Bebida = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const AddCart = styled.button`
    background: transparent;
    border: 2px solid #ff3939;
    color: #ff3939;
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    margin-top: 0.3rem;
    transition: all .1s ease-in-out;
    font-weight: 700;

    &:hover {
        transform: scale(1.05);
    }
`
