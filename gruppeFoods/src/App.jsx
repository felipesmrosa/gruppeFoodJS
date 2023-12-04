import { Router } from "./Router";
import { BrowserRouter, useNavigate } from 'react-router-dom'

import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { app } from "./Services/firebaseConfig";
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from 'moment-timezone';

export function App() {
  //Firebase
  const db = getFirestore(app)
  const restauranteCollection = collection(db, "restaurantes")
  const storage = getStorage();

  const [name, setName] = useState('')
  const [price, setPrice] = useState(null)
  const [src, setSrc] = useState('')

  const [cardapioArray, serCardapioArray] = useState([])

  //Array com as váriaveis do banco de dados
  const [infos, setInfos] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    endereco: '',
    bairro: '',
    cpf: '',
    logo: '',
    horarioFuncionamentoI: '',
    horarioFuncionamentoF: '',
    cardapio: [{}]
  });

  //infos.bairro | infos.cidade | infos.cpf | infos.email | infos.endereco | infos.logo | infos.mercadoria | infos.nome | infos.telefone
  //setInfos((prevState) => ({ ...prevState, cidade: "Itajaí", bairro: "Cordeiros" }))
  const handleLogoChange = (e) => {
    if (e.target.files[0]) {
      setInfos({ ...infos, logo: e.target.files[0] });
    }
  };

  //Criar Restaurante no Banco de Dados
  async function criarRestaurante(e) {
    e.preventDefault();

    const {
      nome,
      email,
      telefone,
      cidade,
      endereco,
      bairro,
      cpf,
      horarioFuncionamentoI,
      horarioFuncionamentoF,
      cardapio
    } = infos;

    if (
      nome &&
      email &&
      telefone &&
      cidade &&
      endereco &&
      bairro &&
      cpf &&
      infos.logo &&
      horarioFuncionamentoI &&
      horarioFuncionamentoF &&
      cardapio
    ) {
      try {
        const storageRef = ref(storage, `logosDosRestaurantes/${infos.logo.name}`);
        await uploadBytes(storageRef, infos.logo);

        const imageUrl = await getDownloadURL(storageRef);
        const restauranteData = {
          nome: infos.nome,
          email: infos.email,
          telefone: infos.telefone,
          cidade: infos.cidade,
          endereco: infos.endereco,
          bairro: infos.bairro,
          cpf: infos.cpf,
          logo: imageUrl,
          horarioFuncionamentoI: infos.horarioFuncionamentoI,
          horarioFuncionamentoF: infos.horarioFuncionamentoF,
          cardapio: infos.cardapio // Aqui você está adicionando o campo cardápio ao documento do restaurante
        };

        const docRef = await addDoc(collection(db, 'restaurantes'), restauranteData);
        console.log('Restaurante criado com sucesso:', docRef.id);
        console.log('cardapio:', cardapio);
        // Restante do seu código...
      } catch (error) {
        console.error('Erro ao criar restaurante:', error);
        // Trate o erro de acordo com sua lógica de aplicação
      }
    } else {
      console.log('nome:', nome);
      console.log('email:', email);
      console.log('telefone:', telefone);
      console.log('cidade:', cidade);
      console.log('endereco:', endereco);
      console.log('bairro:', bairro);
      console.log('cpf:', cpf);
      // console.log('logo:', logo);
      console.log('horarioFuncionamentoI:', horarioFuncionamentoI);
      console.log('horarioFuncionamentoF:', horarioFuncionamentoF);
      console.log('cardapio:', cardapio);
      console.log('Preencha todos os campos obrigatórios');
      // Ou exiba uma mensagem para o usuário informando sobre campos obrigatórios não preenchidos
    }
  }

  const adicionarCardapio = (menu) => {
    setInfos({ ...infos, cardapio: [...infos.cardapio, menu] })
  }

  // const adicionarHorarioFuncionamento = (horario) => {
  //   setInfos({ ...infos, horarioFuncionamento: [...infos.horarioFuncionamento, horario] });
  // };

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
    toast.success(`${item.name} adicionado ao carrinho!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    const carrinhoAtual = tipo === 'combo' ? carrinho : porcoesCarrinho;

    const itemNoCarrinho = carrinhoAtual.find((i) => {
      return i.id === item.id
    });

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
      // Obtém dados dos restaurantes do Firebase
      const data = await getDocs(restauranteCollection);
      const restaurantesData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setRestaurantes(restaurantesData);
    };

    getRestaurantes();
  }, []);

  const [mostrarModal, setMostrarModal] = useState(false)

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router
          handleLogoChange={handleLogoChange}

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
          adicionarCardapio={adicionarCardapio}

          name={name}
          price={price}
          src={src}
          setName={setName}
          setPrice={setPrice}
          setSrc={setSrc}
        />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <ToastContainer />
    </ThemeProvider>

  )
}