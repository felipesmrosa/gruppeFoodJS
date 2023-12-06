import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 2rem;
    background-color: ${props => props.theme["gray-100"]};

    img {
        width: 75%;
        padding: 0.5rem;
    }
    a {
        width: 11%;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
`
export const ProdutosDoRestaurante = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
export const Legenda = styled.legend`
    font-size: 28px;
    font-weight: 500;
    text-transform: uppercase;
`
export const FecharProdutos = styled.p`
    border: 2px solid #f9a01b;
    border-radius: 50%;
    width: 4vh;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const FecharProdutosHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
`
export const ButtonCadastroDeProdutos = styled.button`
    width: 56%;
    height: 2.3rem;
    border-radius: 16px;
    background: transparent;
    color: #ff3939;
    border: 3px solid #ff3939;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .1s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`
export const ButtonTPC = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        border: 3px solid #f9a01b;
        border-radius: 50%;
        width: 3vh;
        height: 3vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    svg {
        width: 80%;
    }
`
export const CadastrarCardapio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 2rem 0;
    gap: 2rem;
`
export const SearchEat = styled.form`
    input {
        outline: none;
        border-radius: 8px 0px 0px 8px;
        border: 1px solid ${props => props.theme["black-100"]};
        width: 100%;
        height: 2.1rem;
        padding-left: 1rem;
    }
    button {
        cursor: pointer;
        background: #FF3939;
        color: #F9A01B;
        font-size: 1.5rem;
        padding: 0.1rem 0.5rem;
        border-radius: 0px 8px 8px 0px;
        border: 1px solid #000;
        position: absolute;
    }
`

export const MenuNavigator = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    p {
        font-size: .875rem;
    }
`
export const ButtonCarrinho = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme["red-100"]};
    padding: 0.5rem;
    border-radius: 6px;
    color: ${props => props.theme["red-100"]};
    font-size: 1.15rem;
    background-color: transparent;
    position: relative;
`
export const Entregas = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme["red-100"]};
    padding: 0.5rem;
    border-radius: 6px;
    color: ${props => props.theme["red-100"]};
    font-size: 1.15rem;
    background-color: transparent;
`
export const Perfil = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #FF3939;
    padding: 0.6rem;
    border-radius: 6px;
    color: #FF3939;
    font-size: 1.85rem;
    background-color: transparent;
`

export const QuantidadeJaDentroDoCarrinho = styled.span`
    background: ${props => props.theme['red-100']};
    border-radius: 50%;
    width: 3vh;
    height: 3vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.95rem;
    position: absolute;
    left: 88%;
    bottom: 66%;
    color: ${props => props.theme['white-100']};
`


// FOOTER

export const FooterPageFood = styled.footer`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${props => props.theme["gray-100"]};
    padding: 2rem;
`
export const Formulario = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    gap: 0.2rem;

    fieldset {
        padding: 1rem 2rem;
        border-radius: 18px;
        border: 2.5px solid #000;
    }

    input, select {
        width: 100%;
        height: 2.7rem;
        padding: 0 1rem;
        margin-bottom: 1rem;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid;
    }
    input[type="file"] {
        display: none;
    }
    label {
        cursor: pointer;
    }
`
export const Cadastro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0px;
`
export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: 0.7rem 0;
`
export const ButtonCadastrarRestaurante = styled.button`
    cursor: pointer;
    width: 100%;
    padding: 0.6rem;
    border-radius: 18px;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    background: #ff3939;
    color: #f9a01b;
    transition: all .1s ease-in-out;

    &:hover {
        transform: scale(1.01);
    }
`