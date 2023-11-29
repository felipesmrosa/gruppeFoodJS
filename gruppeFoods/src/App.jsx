import { Router } from "./Router";
import { BrowserRouter, useNavigate } from 'react-router-dom'

import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { app } from "./Services/firebaseConfig";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  //Firebase
  const db = getFirestore(app)
  const restauranteCollection = collection(db, "restaurantes")

  //Array com as váriaveis do banco de dados
  const [infos, setInfos] = useState({
    nome: '',
    mercadoria: '',
    email: '',
    telefone: '',
    cidade: '',
    endereco: '',
    bairro: '',
    cpf: '',
    logo: ''
  });

  //infos.bairro | infos.cidade | infos.cpf | infos.email | infos.endereco | infos.logo | infos.mercadoria | infos.nome | infos.telefone
  //setInfos((prevState) => ({ ...prevState, cidade: "Itajaí", bairro: "Cordeiros" }))

  //Criar Restaurante no Banco de Dados
  async function criarRestaurante(e) {
    e.preventDefault()
    const restaurante = await addDoc(restauranteCollection, {
      nome, mercadoria, email, telefone, cidade, endereco, bairro, cpf, logo: logo
    })
  }

  const [carrinho, setCarrinho] = useState([]);
  const [porcoesCarrinho, setPorcoesCarrinho] = useState([]);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false)
  const [historico, setHistorico] = useState([]);

  const [formaDePagamento, setFormaDePagamento] = useState('dinheiro')

  // Calculando o total de itens e o preço total dos combos
  const totalItensCombos = carrinho.reduce((total, item) => total + item.quantidade, 0)
  const precoTotalCombos = carrinho.reduce((total, item) => total + item.price * item.quantidade, 0);

  // Calculando o total de itens e o preço total das porções
  const totalItensPorcoes = porcoesCarrinho.reduce((total, item) => total + item.quantidade, 0);
  const precoTotalPorcoes = porcoesCarrinho.reduce((total, item) => total + item.price * item.quantidade, 0);

  // Calculando o total de itens e o preço total geral
  const totalItensGeral = totalItensCombos + totalItensPorcoes;
  const precoTotalGeral = precoTotalCombos + precoTotalPorcoes;

  useEffect(() => {
    const historicoArmazenado = JSON.parse(localStorage.getItem('historicoCompras')) || [];
    setHistorico(historicoArmazenado);
  }, []);

  useEffect(() => {
    const carrinhoLocalStorage = localStorage.getItem('carrinho');
    const porcoesCarrinhoLocalStorage = localStorage.getItem('porcoesCarrinho');

    if (carrinhoLocalStorage) {
      setCarrinho(JSON.parse(carrinhoLocalStorage));
    }
    if (porcoesCarrinhoLocalStorage) {
      setPorcoesCarrinho(JSON.parse(porcoesCarrinhoLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  useEffect(() => {
    localStorage.setItem('porcoesCarrinho', JSON.stringify(porcoesCarrinho));
  }, [porcoesCarrinho]);

  const adicionarAoCarrinho = (item, tipo) => {
    const carrinhoAtual = tipo === 'combo' ? carrinho : porcoesCarrinho;

    const itemNoCarrinho = carrinhoAtual.find((i) => i.id === item.id);

    if (itemNoCarrinho) {
      const novoCarrinho = carrinhoAtual.map((i) =>
        i.id === item.id ? { ...i, quantidade: i.quantidade + 1 } : i
      );

      tipo === 'combo' ? setCarrinho(novoCarrinho) : setPorcoesCarrinho(novoCarrinho);
    } else {
      const novoItem = { ...item, quantidade: 1 };

      tipo === 'combo'
        ? setCarrinho([...carrinhoAtual, novoItem])
        : setPorcoesCarrinho([...carrinhoAtual, novoItem]);
    }
  };

  const removerDoCarrinho = (id, tipo) => {
    const carrinhoAtual = tipo === 'combo' ? carrinho : porcoesCarrinho;

    const novoCarrinho = carrinhoAtual.filter((item) => item.id !== id);

    tipo === 'combo' ? setCarrinho(novoCarrinho) : setPorcoesCarrinho(novoCarrinho);
  };


  //Armazena os restaurantes
  const [restaurantes, setRestaurantes] = useState([]);

  //Olhar se tem dados salvos, se tiver, renderizar em tela
  useEffect(() => {
    const getRestaurantes = async () => {
      //Armazena a listagem de restaurantes do firebase
      //getDocs pega a referencia no banco de dados
      const data = await getDocs(restauranteCollection)
      setRestaurantes(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    };
    getRestaurantes();
  }, []);
  console.log(restaurantes)

  const [mostrarModal, setMostrarModal] = useState(false)

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router
          historico={historico}
          setHistorico={setHistorico}
          infos={infos}
          setInfos={setInfos}

          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}

          totalItensGeral={totalItensGeral}
          precoTotalGeral={precoTotalGeral}

          formaDePagamento={formaDePagamento}
          setFormaDePagamento={setFormaDePagamento}

          carrinho={carrinho}
          setCarrinho={setCarrinho}
          porcoesCarrinho={porcoesCarrinho}
          setPorcoesCarrinho={setPorcoesCarrinho}

          setPedidoFinalizado={setPedidoFinalizado}

          adicionarAoCarrinho={adicionarAoCarrinho}
          removerDoCarrinho={removerDoCarrinho}

          restaurantes={restaurantes}
          setRestaurantes={setRestaurantes}

          criarRestaurante={criarRestaurante}
        />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}