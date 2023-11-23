import {
    ContainerProdutos,
    Combos,
    ProductCard,
    Lanches,
    Porcoes,
    Sobremesas,
    Bebidas,
    TitleSession,
    ImagemComida,
    AddCart,
    Dados,
    LogoRestaurante
} from './styles'

const combos = [
    {
        id: 1,
        src: '../../src/images/comidas/combos/combo01.jpg',
        name: "Combo 01",
        price: 10
    },
    {
        id: 2,
        src: '../../src/images/comidas/combos/combo02.jpg',
        name: "Combo 02",
        price: 11
    },
    {
        id: 3,
        src: '../../src/images/comidas/combos/combo03.jpg',
        name: "Combo 03",
        price: 17
    },
    {
        id: 4,
        src: '../../src/images/comidas/combos/combo04.jpg',
        name: "Combo 04",
        price: 13
    },
    {
        id: 5,
        src: '../../src/images/comidas/combos/combo05.jpg',
        name: "Combo 05",
        price: 12
    },
]
const lanches = [
    {
        id: 1,
        src: '../../src/images/comidas/lanches/Lanche01.jpg',
        name: "Lanche 01",
        price: 10
    },
    {
        id: 2,
        src: '../../src/images/comidas/lanches/Lanche02.jpg',
        name: "Lanche 02",
        price: 11
    },
    {
        id: 3,
        src: '../../src/images/comidas/lanches/Lanche03.jpg',
        name: "Lanche 03",
        price: 17
    },
    {
        id: 4,
        src: '../../src/images/comidas/lanches/Lanche04.jpg',
        name: "Lanche 04",
        price: 13
    },
    {
        id: 5,
        src: '../../src/images/comidas/lanches/Lanche05.jpg',
        name: "Lanche 05",
        price: 12
    },
]
const porcoes = [
    {
        id: 1,
        src: '../../src/images/comidas/porcoes/porcao01.jpg',
        name: "Porção 01",
        price: 10
    },
    {
        id: 2,
        src: '../../src/images/comidas/porcoes/porcao02.jpg',
        name: "Porção 02",
        price: 11
    },
    {
        id: 3,
        src: '../../src/images/comidas/porcoes/porcao03.jpg',
        name: "Porção 03",
        price: 17
    },
    {
        id: 4,
        src: '../../src/images/comidas/porcoes/porcao04.jpg',
        name: "Porção 04",
        price: 13
    },
    {
        id: 5,
        src: '../../src/images/comidas/porcoes/porcao05.jpg',
        name: "Porção 05",
        price: 12
    },
]
const sobremesas = [
    {
        id: 1,
        src: '../../src/images/comidas/sobremesas/sobremesa01.jpg',
        name: "Sobremesa 01",
        price: 10
    },
    {
        id: 2,
        src: '../../src/images/comidas/sobremesas/sobremesa02.jpg',
        name: "Sobremesa 02",
        price: 11
    },
    {
        id: 3,
        src: '../../src/images/comidas/sobremesas/sobremesa03.jpg',
        name: "Sobremesa 03",
        price: 17
    },
    {
        id: 4,
        src: '../../src/images/comidas/sobremesas/sobremesa04.jpg',
        name: "Sobremesa 04",
        price: 13
    },
    {
        id: 5,
        src: '../../src/images/comidas/sobremesas/sobremesa05.jpg',
        name: "Sobremesa 05",
        price: 12
    },
]
const bebidas = [
    {
        id: 1,
        src: '../../src/images/comidas/bebidas/bebidas01.jpg',
        name: "Bebida 01",
        price: 10
    },
    {
        id: 2,
        src: '../../src/images/comidas/bebidas/bebidas02.jpg',
        name: "Bebida 02",
        price: 11
    },
    {
        id: 3,
        src: '../../src/images/comidas/bebidas/bebidas03.jpg',
        name: "Bebida 03",
        price: 17
    },
    {
        id: 4,
        src: '../../src/images/comidas/bebidas/bebidas04.jpg',
        name: "Bebida 04",
        price: 13
    },
    {
        id: 5,
        src: '../../src/images/comidas/bebidas/bebidas05.jpg',
        name: "Bebida 05",
        price: 12
    },
]

export function Produto({ handleAddItemInCart }) {
    return (
        <>
            <Dados>
                <LogoRestaurante src="../../src/images/restaurantes/jungle.jpg" alt="" />
                <div>
                    <p>(restaurante.nome)</p>
                    <p>(restaurante.abertoOuFechado)</p>
                    <p>(restaurante.horario)</p>
                    <p>(restaurante.endereco)</p>
                    <p>(restaurante.taxaEntrega)</p>
                </div>
            </Dados>
            <ContainerProdutos>
                <TitleSession>Combos</TitleSession>
                <Combos>
                    {combos.map((combo) => (
                        <ProductCard key={combo.id}>
                            <ImagemComida src={combo.src} alt={combo.name} />
                            <div>
                                <h3>{combo.name}</h3>
                                <p>${combo.price}</p>
                            </div>
                            <AddCart onClick={handleAddItemInCart}>
                                add to cart
                            </AddCart>
                        </ProductCard>
                    ))}
                </Combos>

                <TitleSession>Lanches</TitleSession>
                <Lanches>
                    {lanches.map((lanche) => (
                        <ProductCard key={lanche.id}>
                            <ImagemComida src={lanche.src} alt={lanche.name} />
                            <div>
                                <h3>{lanche.name}</h3>
                                <p>${lanche.price}</p>
                            </div>
                            <AddCart onClick={handleAddItemInCart}>
                                add to cart
                            </AddCart>
                        </ProductCard>
                    ))}
                </Lanches>

                <TitleSession>Porções</TitleSession>
                <Porcoes>
                    {porcoes.map((porcao) => (
                        <ProductCard key={porcao.id}>
                            <ImagemComida src={porcao.src} alt={porcao.name} />
                            <div>
                                <h3>{porcao.name}</h3>
                                <p>${porcao.price}</p>
                            </div>
                            <AddCart onClick={handleAddItemInCart}>
                                add to cart
                            </AddCart>
                        </ProductCard>
                    ))}
                </Porcoes>

                <TitleSession>Sobremesas</TitleSession>
                <Sobremesas>
                    {sobremesas.map((sobremesa) => (
                        <ProductCard key={sobremesa.id}>
                            <ImagemComida src={sobremesa.src} alt={sobremesa.name} />
                            <div>
                                <h3>{sobremesa.name}</h3>
                                <p>${sobremesa.price}</p>
                            </div>
                            <AddCart onClick={handleAddItemInCart}>
                                add to cart
                            </AddCart>
                        </ProductCard>
                    ))}
                </Sobremesas>

                <TitleSession>Bebidas</TitleSession>
                <Bebidas>
                    {bebidas.map((bebida) => (
                        <ProductCard key={bebida.id}>
                            <ImagemComida src={bebida.src} alt={bebida.name} />
                            <div>
                                <h3>{bebida.name}</h3>
                                <p>${bebida.price}</p>
                            </div>
                            <AddCart onClick={handleAddItemInCart}>
                                add to cart
                            </AddCart>
                        </ProductCard>
                    ))}
                </Bebidas>
            </ContainerProdutos>
        </>
    )
}