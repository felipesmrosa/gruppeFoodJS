import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function HistoricoDeCompras({
    historico,
    setHistorico
}) {

    useEffect(() => {
        const redirecionarParaHistorico = localStorage.getItem('redirecionarParaHistorico');

        // Verifica se o redirecionamento para o histórico após confirmação do pedido foi marcado
        if (redirecionarParaHistorico) {
            // Remove o indicador após a verificação
            localStorage.removeItem('redirecionarParaHistorico');

            // Recarrega a página para atualizar os dados no histórico
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
    }, []);

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
                        <p>Restaurante:</p>
                        <ul>
                            {compra.itens.map((item, idx) => (
                                <li key={idx}>
                                    <img src={item.src} alt="" /> {item.name} - R$ {item.price} - Quantidade: {item.quantidade}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};