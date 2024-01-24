'use client'
// Client side

// Importação do axios para fazer as requisições e state e effetct do react para manipulação de estados
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // Declaração dos estados e funções de manipulação dos estados
  const [cliente, setClient] = useState([]);
  const [rota, setRota] = useState([]);

  const [order, setOrder] = useState("asc");

  // Não implementado
  const [search, setSearch] = useState(""); 

// Estado do modal, aberto ou fechado e suas funções de manipulação com click do botão
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

// Requisições para pegar os dados do banco de dados e setar os estados junto da API
// As requisições de obtenção de dados tem uma sintaxe de IF ternário para verificar se a ordem é crescente ou decrescente
  const getClientes = async () => {
    const endpoint = order === "asc" ? "/api/listarClientesCrescente" : "/api/listarClientesDecrescente";
    const response = await axios.get(`http://localhost:4000${endpoint}`);
    setClient(response.data);
  };

  const getEmail = async () => {
    const endpoint = order === "asc" ? "/api/listarEmailsCrescente" : "/api/listarEmailsDecrescente";
    const response = await axios.get(`http://localhost:4000${endpoint}`);
    setClient(response.data);
  }

  const getTelefone = async () => {
    const endpoint = order === "asc" ? "/api/listarTelefonesCrescente" : "/api/listarTelefonesDecrescente";
    const response = await axios.get(`http://localhost:4000${endpoint}`);
    setClient(response.data);
  }

  // Calcular a rota de entrega de acordo com as coordenadas X e Y
  const getCalcularRota = async() => {
    const response = await axios.get("http://localhost:4000/api/calcularRota");
    setRota(response.data);
  }

  // UseEffect para executar as funções de requisição de dados e setar os estados
  useEffect(() => {
    getCalcularRota();
  }, []);

  useEffect(() => {
    getClientes();
  }, []);

  useEffect(() => {
    getEmail();
  }, []);

  useEffect(() => {
    getTelefone();
  }, []);

// Função para ordenar os dados de acordo com a ordem crescente ou decrescente com o click do button
  const handleNomeClick = () => {
    setOrder(order === "asc" ? "desc" : "asc");
    getClientes();
  };

  const handleEmailClick = () => {
    setOrder(order === "asc" ? "desc" : "asc");
    getEmail();
    };

    const handleTelefoneClick = () => {
        setOrder(order === "asc" ? "desc" : "asc");
        getTelefone();
    }

    return(
      <div className="bg-blue-600 h-screen flex flex-col p-4">
        <section>
          <header><h1 className="text-center text-3xl">Lista de usuários</h1></header>
          <div> 
            <div className="flex flex-wrap items-center gap-4 justify-between my-4">
              <div>
                  <label htmlFor="search">Barra de pesquisa</label>
                  <input className="text-black ml-2" type="text" id="search" name="search" placeholder="Filtre digitando!"/>
              </div>
              <ul className="flex gap-4">
                  <li className="flex"><button onClick={handleNomeClick}>Nome</button><Image src={"/swap.png"} alt="" width={20} height={20}></Image></li>
                  <li className="flex"><button onClick={handleEmailClick}>Email</button><Image src={"/swap.png"} alt="" width={20} height={20}></Image></li>
                  <li className="flex"><button onClick={handleTelefoneClick}>Telefone</button><Image src={"/swap.png"} alt="" width={20} height={20}></Image></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-wrap">
            <h3 className="bg-black rounded-t-lg pl-2">Nome - Email - Telefone - Coordenada X - Coordenada Y</h3>
              <ul>
                {cliente.map((cliente) => (
                  <li className=" bg-green-500" key={cliente.id}>
                    <h2 className="pl-2">{cliente.nome} - {cliente.email} - {cliente.telefone} - X: {cliente.x} | Y: {cliente.y}</h2>
                    <hr />
                  </li>
                ))}
              </ul>
          </div>
        </section>
        <div className="flex justify-center items-center mt-8 gap-4 h-screen">
            <button className="bg-green-400 hover:bg-green-700 duration-500 p-2 rounded-lg cursor-pointer" onClick={handleOpenModal}>Calcular rotas de entrega!</button>
            <Link className="bg-red-400 hover:bg-red-700 duration-500 p-2 rounded-lg w-40 text-center" href={"/"}>Voltar</Link>
            {modal && <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg p-4 flex flex-col overflow-y-auto h-5/6 w-5/6 backdrop-blur-sm">
                <h2 className="mb-4 pl-2">Rota de entrega</h2>
                <h3 className="mb-4 pl-2">Início -&gt; X : 0 | Y : 0</h3>
              {rota.map((rota, index) => (
                  <ul className="bg-gray-700" key={rota.id}>
                      <li className="pl-2">{index + 1}º Cliente: {rota.nome} - Coordenadas = X: {rota.x} | Y: {rota.y}</li>
                      <hr />
                  </ul>
              ))}
              <h3 className="mt-4 pl-2">Finalizado! Retornar ao início!</h3>
                <button className="bg-red-400 hover:bg-red-700 duration-500 p-2 ml-2 rounded-lg w-40 text-center mt-4" onClick={handleCloseModal}>Fechar</button>
            </div> }
        </div>        
      </div>
      
    )
}