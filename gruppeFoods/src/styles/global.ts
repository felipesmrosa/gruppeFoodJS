import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Big Shoulders Display', sans-serif;
        font-size: 1.25rem;
        letter-spacing: 2px;

    }
    body {
        background: ${props => props.theme['white-100']};
        color: ${props => props.theme['black-100']};
        -webkit-font-smoothing: antialiased;
    }
    :focus {
        outline: none;
    }
    button {
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }   
    a {
        text-decoration: none;
        letter-spacing: 0.5px;
        color: #000;
    }
`
