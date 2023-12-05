import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function HistoricoDeCompras({
    historico,
    setHistorico
}) {

    const resetarHistorico = () => {
        localStorage.removeItem('historicoCompras');
        setHistorico([]);
    };

    console.log(historico)

    return (
        <div>
            <h1>Histórico de Compras</h1>
            <button onClick={resetarHistorico}>Resetar Histórico</button>
            <ul>
                {historico.map((compra, index) => (
                    <li key={index}>
                        <p>Data da Compra: {compra.data}</p>
                        <p>Status da Entrega: Entregue</p>
                        <ul>
                            {compra.itens.map((item, idx) => (
                                <li key={idx}>
                                    <img src={item.src} alt="" />
                                    {item.nameItem} - R$ {item.priceItem} - Quantidade: {item.quantidade}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};