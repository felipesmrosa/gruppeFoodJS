import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 2rem;
    background-color: ${props => props.theme["gray-100"]};

    img {
        width: 8%;
        padding: 0.5rem;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
`

export const SearchEat = styled.div`
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
`

export const Entregas = styled.button `
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
export const Perfil = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #FF3939;
    padding: 0.3rem;
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
    font-size: 0.95rem;
    position: absolute;
    left: 86.8%;
    top: 4%;
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
    gap: .2rem;

    input, select {
        width: 100%;
        height: 2rem;
        padding: 0 1rem;
        border-radius: 8px;
        border: 1px solid ${props => props.theme["gray-900"]};
        background-color: transparent;
    }
    input[type="file"] {
        border: none;
    }
`
