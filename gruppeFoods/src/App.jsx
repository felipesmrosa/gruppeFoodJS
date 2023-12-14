import { Router } from "./Router";
import { BrowserRouter, useNavigate } from 'react-router-dom'

import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { app } from "./Services/firebaseConfig";
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { v4 as uuidv4 } from 'uuid'

export function App() {
  const uniqueID = uuidv4()
  // const navigate = useNavigate();
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
    cardapio: []
  });

  const handleLogoChange = (e) => {
    if (e.target.files[0]) {
      setInfos({ ...infos, logo: e.target.files[0] });
    }
  };
  const [novoItem, setNovoItem] = useState([{
    id: uniqueID,
    nomeDoProduto: '',
    precoDoProduto: '',
    imagemProduto: null,
    descricaoDoProduto: ''
  }]);
  const handleChange = (index, e) => {
    const { name, value } = e.target
    const novosItens = [...novoItem]
    novosItens[index][name] = value;
    setNovoItem(novosItens)
  };
  const adicionarItem = () => {
    setNovoItem([...novoItem, {
      id: uniqueID,
      nomeDoProduto: '',
      precoDoProduto: '',
      imagemProduto: null,
      descricaoDoProduto: ''
    }]);
  };

  const removerItem = (index) => {
    const remove = [...novoItem]
    remove.splice(index, 1)
    setNovoItem(remove)
  }

  const handleProduct = (index, e) => {
    const novosItens = [...novoItem]

    if (e.target.files && e.target.files[0]) {
      novosItens[index].imagemProduto = e.target.files[0];
      setNovoItem(novosItens);
    }
  };

  async function verificarRestauranteExistente(nomeRestaurante) {
    const restaurantesRef = collection(db, 'restaurantes');
    const querySnapshot = await getDocs(
      query(restaurantesRef, where('nome', '==', nomeRestaurante))
    );

    return !querySnapshot.empty; // Retorna true se existir um restaurante com o mesmo nome, caso contrário, retorna false
  }


  //Criar Restaurante no Banco de Dados
  async function criarRestaurante(e) {
    e.preventDefault()

    infos.cardapio.push(novoItem)

    setInfos({
      ...infos,
      cardapio: infos.cardapio,
    });


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
      infos.cardapio.length > 0
    ) {
      try {
        const restauranteJaExistente = await verificarRestauranteExistente(nome);
        if (restauranteJaExistente) {
          // Restaurante com o mesmo nome já existe, trate isso aqui (ex: exiba uma mensagem para o usuário)
          toast.error('Já existe um restaurante com esse nome.', {
            position: "top-right",
          });
          return; // Encerra
        }

        const storageRef = ref(storage, `logosDosRestaurantes/${infos.logo.name}`);
        await uploadBytes(storageRef, infos.logo);
        const imageUrl = await getDownloadURL(storageRef);

        const cardapioComImagens = await Promise.all(
          novoItem.map(async (item) => {
            if (item.imagemProduto) {
              const storageImageRef = ref(storage, `produtos/${item.imagemProduto.name}`);
              await uploadBytes(storageImageRef, item.imagemProduto);
              const imageProdutoUrl = await getDownloadURL(storageImageRef);

              return {
                ...item,
                imagemProduto: imageProdutoUrl,
              };
            } else {
              return item;
            }
          })
        );

        setInfos({
          ...infos,
          novoItem: cardapioComImagens,
        });

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
          novoItem: cardapioComImagens,
        };

        const docRef = await addDoc(collection(db, 'restaurantes'), restauranteData);
        toast.success('Parabéns! Seu restaurante está no ar.', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } catch (error) {
        toast.error('Erro! Tente novamente.', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.warn('Preencha todos os campos!', {
        position: "top-right",
        autoClose: 850,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  //Fim Criar Restaurante no Banco de Dados

  const adicionarCardapio = (menu) => {
    setInfos({ ...infos, cardapio: [...infos.cardapio, menu] })
  }

  const [carrinho, setCarrinho] = useState([]);
  const [porcoesCarrinho, setPorcoesCarrinho] = useState([]);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false)
  const [historico, setHistorico] = useState([]);

  const [formaDePagamento, setFormaDePagamento] = useState('dinheiro')

  // Calculando o total de itens e o preço total dos combos
  const totalItensCombos = carrinho.reduce((total, item) => total + item.quantidade, 0)
  const precoTotalCombos = carrinho.reduce((total, item) => total + item.precoDoProduto * item.quantidade, 0);
  // Calculando o total de itens e o preço total das porções
  const totalItensPorcoes = porcoesCarrinho.reduce((total, item) => total + item.quantidade, 0);
  const precoTotalPorcoes = porcoesCarrinho.reduce((total, item) => total + item.precoDoProduto * item.quantidade, 0);

  // Calculando o total de itens e o preço total geral
  const totalItensGeral = totalItensCombos + totalItensPorcoes;
  const precoTotalGeral = precoTotalCombos + precoTotalPorcoes;

  useEffect(() => {
    const historicoArmazenado = JSON.parse(localStorage.getItem('historicoCompras')) || [];
    setHistorico(historicoArmazenado);
  }, []);

  useEffect(() => {
    const carrinhoLocalStorage = localStorage.getItem('carrinho');

    if (carrinhoLocalStorage) {
      setCarrinho(JSON.parse(carrinhoLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (item, tipo) => {
    toast.success(`${item.nomeDoProduto} adicionado ao carrinho!`, {
      position: "top-right",
      autoClose: 450,
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
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router
          removerItem={removerItem}
          adicionarItem={adicionarItem}

          handleLogoChange={handleLogoChange}

          historico={historico}
          setHistorico={setHistorico}
          infos={infos}
          setInfos={setInfos}

          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
          mostrarDetalhes={mostrarDetalhes}
          setMostrarDetalhes={setMostrarDetalhes}

          totalItensGeral={totalItensGeral}
          precoTotalGeral={precoTotalGeral}

          formaDePagamento={formaDePagamento}
          setFormaDePagamento={setFormaDePagamento}

          handleProduct={handleProduct}

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

          novoItem={novoItem}
          handleChange={handleChange}
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
        theme="colored"
      />
      {/* Same as */}
      <ToastContainer />
      <ToastContainer />
    </ThemeProvider>

  )
}