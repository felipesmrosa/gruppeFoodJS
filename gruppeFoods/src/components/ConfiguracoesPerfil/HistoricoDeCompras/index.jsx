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
    ListaColumn,
    NadaEncontrado
} from './styles'

export function HistoricoDeCompras({
    historico,
    setHistorico,
}) {

    // function resetarHistorico() {
    //     localStorage.removeItem('historicoCompras');
    // }

    return (
        <ConteudoHistorico>
            <h1>HISTÓRICO DE COMPRAS</h1>
            {/* <button onClick={resetarHistorico}>Resetar Histórico</button> */}
            {historico.length === 0 ? (
                <NadaEncontrado>
                    <h1>Nada encontrado... Faça alguma compra!</h1>
                </NadaEncontrado>
            ) : (
                <div>
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
                </div>
            )}
        </ConteudoHistorico>
    );
};