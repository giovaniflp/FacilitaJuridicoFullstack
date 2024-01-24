// Diz para o next.js renderizar na parte do cliente
'use client'
// Importação do axios para fazer as requisições
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function cadastroClientes(){
    
    // Função para fazer o cadastro do cliente
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // Pega os valores dos inputs com a manipulação de DOM usando element by id
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const x = document.getElementById("x").value;
        const y = document.getElementById("y").value;
    
        // Tenta fazer a requisição de cadastro e se der erro, mostra o erro no window alert
        try {
            const response = await axios.post("http://localhost:4000/api/cadastrarCliente", { nome, email, telefone, x, y });
    
            // Handle successful response
            window.alert("Cliente cadastrado com sucesso!");
            
            // Clear form fields, display success message, etc.
        } catch (error) {
            // Handle error
            window.alert("Erro ao cadastrar cliente:" + error);
            // Display error message to the user
        }
    };
    
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-blue-600">

            <header><h1 className="text-xl">Cadastro de Clientes</h1></header>
            <Image className="" src={"/add.svg"} alt="" width={80} height={80}></Image>

            {/* Formulário de cadastro */}

            <form className="flex flex-col" method="POST" onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input className="text-black w-72 mb-4" type="text" name="nome" id="nome" placeholder="Digite seu nome"/>
                <label htmlFor="email">Email:</label>
                <input className="text-black w-72 mb-4" type="email" name="email" id="email" placeholder="Digite seu email"/>
                <label htmlFor="telefone">Telefone:</label>
                <input className="text-black w-72 mb-4" type="number" name="telefone" id="telefone" placeholder="Digite seu telefone"/>
                <label htmlFor="x">Coordenada X</label>
                <input className="text-black w-72 mb-4" type="number" name="x" id="x" placeholder="Coordenada X do cliente"/>
                <label htmlFor="y">Coordenada Y</label>
                <input className="text-black w-72" type="number" name="y" id="y" placeholder="Coordenada Y do cliente"/>
                <div className="flex justify-center items-center cursor-pointer">
                    <input className="bg-green-400 hover:bg-green-700 duration-500 mt-8 p-2 rounded-lg w-40 cursor-pointer" type="submit" value="Cadastrar"/>
                </div>
            </form>

            <Link className="bg-red-400 hover:bg-red-700 duration-500 p-2 mt-4 rounded-lg w-40 text-center" href={"/"}>Voltar</Link>
            
        </div>
    )
}