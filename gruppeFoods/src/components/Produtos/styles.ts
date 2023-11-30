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

export const Demonho = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LogoRestaurante = styled.img`
    border-radius: 50%;
    width: 18vh;
    height: 18vh;
`
export const InformacoesDoRestaurante = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
`

export const ImagemComida = styled.img`
    width: 20vh;
    height: 20vh;
    border-radius: 10px;
    padding: 0.2rem;
`

export const Combos = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    margin-bottom: 2rem;
    gap: 1rem;
`

export const ProductCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: ${props => props.theme['red-100']};
    border-radius: 8px;
    border: 2px solid;
    padding: 0.1rem 0.1rem 0.5rem;
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
    border: 2px solid #f9a01b;
    color: #f9a01b;
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
