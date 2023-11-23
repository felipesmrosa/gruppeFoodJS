import styles from 'styled-components'

export const QuantidadeJaDentroDoCarrinho = styles.span`
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