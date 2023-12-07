import { TrashSimple } from 'phosphor-react'
import {
    Container,
    ProdutoImagem,
    Infos,
    Descricao,
    DeletarProduto,
    Spanzinho
} from './styles'

export function Produto({
    produtos,
    handleDelete,
    novoItem
}) {
    return (
        <Container>
            {produtos.map((produto) => (
                <Infos key={produto.nome}>
                    <DeletarProduto onClick={handleDelete}>
                        <TrashSimple />
                    </DeletarProduto>
                    <ProdutoImagem src={produto.imagem} alt="" />
                    <Spanzinho>
                        <p>{produto.nome}</p>
                        <Descricao>{produto.descricao}</Descricao>
                    </Spanzinho>
                    <p>{produto.preco}</p>
                </Infos>
            ))}
        </Container>
    )
}