import { Link } from 'react-router-dom'
import { RegisterYourRestaurant } from './ContentFooter/RegisterYourRestaurant'
import { FooterPageFood } from './styles'

export function Footer() {
    return (
        <>
            <FooterPageFood>
                <Link to="home/registerRestaurant">Cadastre seu restaurante</Link>
                {/* <RegisterYourRestaurant /> */}
            </FooterPageFood>
        </>
    )
}