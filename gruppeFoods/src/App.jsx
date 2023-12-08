import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom'

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
  const [novoItem, setNovoItem] = useState({
    id: uniqueID,
    nomeDoProduto: '',
    precoDoProduto: '',
    imagemProduto: '',
    descricaoDoProduto: ''
  });
  const handleChange = (e) => {
    setNovoItem({ ...novoItem, [e.target.name]: e.target.value });
  };
  const handleProduct = (e) => {
    const arquivo = e.target.files[0]
    setNovoItem({ ...novoItem, imagemProduto: arquivo });
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
          infos.cardapio.map(async (item) => {
            const storageImageRef = ref(storage, `produtos/${item.imagemProduto.name}`);
            await uploadBytes(storageImageRef, item.imagemProduto);
            const imageProdutoUrl = await getDownloadURL(storageImageRef);

            return {
              ...item,
              imagemProduto: imageProdutoUrl,
            };
          })
        );
        setInfos({
          ...infos,
          cardapio: cardapioComImagens,
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
          cardapio: cardapioComImagens,
        };

        console.log('restauranteData: ', restauranteData)
        console.log('cardapioComImagens:', cardapioComImagens)

        const docRef = await addDoc(collection(db, 'restaurantes'), restauranteData);
        console.log('Restaurante criado com sucesso:', docRef.id);
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
        console.error('Erro ao criar restaurante:', error);
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

  const [precoAdicionais, setPrecoAdicionais] = useState(null)

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

  const adicionarAoCarrinho = (item, tipo) => {
    toast.success(`${item.nameItem} adicionado ao carrinho!`, {
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

          precoAdicionais={precoAdicionais}
          setPrecoAdicionais={setPrecoAdicionais}
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