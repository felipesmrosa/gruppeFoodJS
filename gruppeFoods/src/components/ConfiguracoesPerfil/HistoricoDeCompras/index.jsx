import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    ImagemDoProduto,
    ConteudoHistorico,
    ContainerDoProduto,
    ProdutoNoHistorico,
    Status,
    TextoStatus,
    DataDaCompra,
    BtnConfirmar,
    Descricao,
    Reverse,
    ListaColumn
} from './styles'

export function HistoricoDeCompras({
    historico,
    setHistorico,
}) {

    return (
        <ConteudoHistorico>
            <h1>HISTÓRICO DE COMPRAS</h1>
            {/* <button onClick={resetarHistorico}>Resetar Histórico</button> */}
            <ListaColumn>
                {historico.map((compra, index) => (
                    <ContainerDoProduto key={index}>
                        <DataDaCompra>{compra.data}</DataDaCompra>
                        <Status>
                            <p>Status:</p>
                            <TextoStatus>
                                Entregue
                            </TextoStatus>
                        </Status>
                        <Reverse>
                            {compra.itens.map((item, idx) => (
                                <ProdutoNoHistorico key={idx}>
                                    <ImagemDoProduto src={item.imagemProduto} alt="" />
                                    <p>Quantidade: {item.quantidade}</p>
                                    <p>{item.nomeDoProduto} - R$ {item.precoDoProduto}</p>
                                    <Descricao>{item.descricaoDoProduto}</Descricao>
                                </ProdutoNoHistorico>
                            ))}
                        </Reverse>
                    </ContainerDoProduto>
                ))}
            </ListaColumn>
        </ConteudoHistorico>
    );
};