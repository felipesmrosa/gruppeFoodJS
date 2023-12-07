import styled from "styled-components";

export const MenuInteractiveIcons = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 18.5rem;
`
export const MenuItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        width: 21%;
    }
`

export const HighlightsForYou = styled.div `
    margin: 2rem 15rem;
    margin-bottom: 1rem;
    color: ${props => props.theme["red-100"]};
    font-size: 1.35rem;
    text-transform: uppercase;
`

export const Restaurants = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin: 1rem 0;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: row;
`

export const Restaurant = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    a {
        text-decoration: none;
        font-size: 1rem;
        text-transform: none;
    }
`
export const Logo = styled.img`
    width: 20vh;
    height: 20vh;
    border-radius: 20px;
`