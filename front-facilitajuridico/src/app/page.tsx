// Importa os componentes necessários do Next.js
import Link from "next/link";
import Image from "next/image";

// Page home
export default function Home(){
  return(
    <div className="flex flex-col justify-center items-center h-screen bg-blue-600">
      
      <header><h1 className="text-xl text-center">Bem vindo ao sistema de Gerenciamento de Clientes!</h1></header>
      <Image className="mb-8" src={"/target.png"} alt="" width={80} height={80}></Image>

      <div className="flex flex-col gap-4 text-center">

      <Link className="bg-indigo-400 hover:bg-indigo-700 duration-500 p-2 rounded-lg" href="/listaClientes">Lista de Clientes!</Link>
      <Link className="bg-green-400 hover:bg-green-700 duration-500 p-2 rounded-lg" href="/cadastroClientes">Cadastro de Clientes!</Link>

      </div>
    </div>
  )
}