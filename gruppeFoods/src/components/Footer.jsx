import { Link } from 'react-router-dom'
import {
    FooterPageFood,
    LogoRodape,
    Desenvolvido,
    LinkEContato,
    SpanContato
} from './styles'

export function Footer() {
    return (
        <>
            <FooterPageFood>
                <LogoRodape src="../../../src/images/logo.png" alt="" />
                <LinkEContato>
                    <Link to="home/registerRestaurant">Cadastre seu restaurante</Link>
                    <SpanContato>
                        <p>contato@gruppefoods.com</p>
                        <p>47991424212</p>
                    </SpanContato>
                </LinkEContato>
            </FooterPageFood>
            <Desenvolvido>
                <p>Desenvolvido por: Felipe Miranda</p>
            </Desenvolvido>
        </>
    )
}