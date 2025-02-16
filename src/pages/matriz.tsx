import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div >
        <header className="flex justify-between items-center p-4 bg-black rounded-lg max-w-[1340px] mx-auto mt-2">
                      <div className="flex items-center space-x-3">
                        <img src="/src/image/Easy Meal Logo.png" alt="Logo" className="w-6 h-6" />
                        <div>
                          <h1 className="text-sm font-semibold text-gray-50">Acessement AI</h1>
                          <p className="text-xs text-gray-500">Sistema escolar CAF</p>
                        </div>
                      </div>
                
                      <nav className="flex space-x-4 text-sm text-gray-300">
                        <a href="#"  className="hover:text-white"> <Link to="/sistema">Home</Link> </a>
                        <a href="#"  className="hover:text-white"> <Link to="/matriz">Chaves/Matriz</Link></a>
                        <a href="#"  className="hover:text-white"> <Link to="/resolucao">Resolução</Link></a>
                        <a href="#"  className="hover:text-white"> <Link to="/alunos">Alunos</Link></a>
                      </nav>
                
                      <div className="flex items-center space-x-3">
                        <a href="#" className="text-xs text-gray-400 hover:text-white"><img src="/src/image/notification.svg" alt="icone de notificação" /></a>
                        <a href="#" className="text-xs text-gray-400 hover:text-white"><img src="/src/image/avatar-circle.png" alt="perfil" /></a>
                        <div>
                          <p className="text-sm text-gray-50">Joao Tambue</p>
                          <p className="text-xs text-gray-300">tjoao7279@gmail.com</p>
                        </div>
                      </div>
                    </header>
    <section className="flex max-w-[1240px] mx-auto mt-14">
          <h1 className="font-semibold text-xl">Chaves/Matriz(12)</h1>
          <div className="flex gap-7 ml-auto mt-4">
          <details className="relative inline-block">
  <summary className="bg-pink-100 text-black px-4 py-2 rounded-lg flex items-center space-x-1 border border-pink-200 shadow-sm cursor-pointer">
    <span>Categoria</span>
    <span>
      <img src="/src/image/ceta.svg" alt="" />
    </span>
  </summary>
  <div className="absolute mt-2 bg-white border border-gray-300 shadow-lg rounded-lg p-2 w-full">
    <p className="py-1 cursor-pointer">Categoria 1</p>
    <p className="py-1 cursor-pointer">Categoria 2</p>
    <p className="py-1 cursor-pointer">Categoria 3</p>
  </div>
</details>

          <details className="relative inline-block">
  <summary className="bg-pink-100 text-black px-4 py-2 rounded-lg flex items-center space-x-1 border border-pink-200 shadow-sm cursor-pointer">
    <span>Fase</span>
    <span>
      <img src="/src/image/ceta.svg" alt="" />
    </span>
  </summary>
  <div className="absolute mt-2 bg-white border border-gray-300 shadow-lg rounded-lg p-2 w-full">
    <p className="py-1 cursor-pointer">Fase 1</p>
    <p className="py-1 cursor-pointer">Fase 2</p>
    <p className="py-1 cursor-pointer">Fase 3</p>
  </div>
</details>
          <button className="bg-pink-100 text-black px-4 py-2 rounded-lg flex items-center space-x-1 border border-pink-200 shadow-sm">
            <span onClick={() => setIsModalOpen(true)}>Adicionar</span>
            <span onClick={() => setIsModalOpen(true)}>+</span>
            </button>
          </div>
      </section>

      <div className=" container mx-auto w-[1240px] mt-11">
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-pink-100 text-gray-700">
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">Título</th>
                        <th className="py-3 px-6 text-left">Categoria</th>
                        <th className="py-3 px-6 text-left">Fase</th>
                        <th className="py-3 px-6 text-left">Data</th>
                        <th className="py-3 px-6 text-left">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200">
                        <td className="py-3 px-6">00</td>
                        <td className="py-3 px-6">Estrutura de Dados</td>
                        <td className="py-3 px-6">10</td>
                        <td className="py-3 px-6">20</td>
                        <td className="py-3 px-6">02/01/2005</td>
                        <td className="py-3 px-6">
                          <button className="text-gray-500"><img src="/src/image/escrever.png" alt="img" /></button>
                          <button className="text-red-500 "><img src="/src/image/delete.png" alt="" /></button>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="py-3 px-6">00</td>
                        <td className="py-3 px-6">Lógica de Programação</td>
                        <td className="py-3 px-6">10</td>
                        <td className="py-3 px-6">20</td>
                        <td className="py-3 px-6">02/01/2005</td>
                        <td className="py-3 px-6">
                          <button className="text-gray-500"><img src="/src/image/escrever.png" alt="img" /></button>
                          <button className="text-red-500 "><img src="/src/image/delete.png" alt="" /></button>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="py-3 px-6">00</td>
                        <td className="py-3 px-6">Laço de Repetição</td>
                        <td className="py-3 px-6">10</td>
                        <td className="py-3 px-6">20</td>
                        <td className="py-3 px-6">02/01/2005</td>
                        <td className="py-3 px-6">
                          <button className="text-gray-500"><img src="/src/image/escrever.png" alt="img" /></button>
                          <button className="text-red-500 "><img src="/src/image/delete.png" alt="" /></button>
                        </td>
                    </tr>
                </tbody>
                <tr className="border-b border-gray-200">
                        <td className="py-3 px-6">00</td>
                        <td className="py-3 px-6">Estrutura de Dados</td>
                        <td className="py-3 px-6">10</td>
                        <td className="py-3 px-6">20</td>
                        <td className="py-3 px-6">02/01/2005</td>
                        <td className="py-3 px-6">
                          <button className="text-gray-500"><img src="/src/image/escrever.png" alt="img" /></button>
                          <button className="text-red-500 "><img src="/src/image/delete.png" alt="" /></button>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="py-3 px-6">00</td>
                        <td className="py-3 px-6">Lógica de Programação</td>
                        <td className="py-3 px-6">10</td>
                        <td className="py-3 px-6">20</td>
                        <td className="py-3 px-6">02/01/2005</td>
                        <td className="py-3 px-6">
                          <button className="text-gray-500"><img src="/src/image/escrever.png" alt="img" /></button>
                          <button className="text-red-500 "><img src="/src/image/delete.png" alt="" /></button>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="py-3 px-6">00</td>
                        <td className="py-3 px-6">Laço de Repetição</td>
                        <td className="py-3 px-6">10</td>
                        <td className="py-3 px-6">20</td>
                        <td className="py-3 px-6">02/01/2005</td>
                        <td className="py-3 px-6">
                            <button className="text-gray-500"><img src="/src/image/escrever.png" alt="img" /></button>
                            <button className="text-red-500 "><img src="/src/image/delete.png" alt="" /></button>
                        </td>
                    </tr>
                
            </table>
        </div>
    </div>

    {/* Modal */}
    {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
      {/* Cabeçalho do Modal */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Registrar Matriz</h2>
        <button onClick={() => setIsModalOpen(false)}>
          <img src="/src/image/icone de x.svg" alt="Fechar" className="w-5 h-5" />
        </button>
      </div>

      {/* Formulário */}
      <form className="flex flex-col gap-4">
        {/* Campo de Título */}
        <div>
          <label htmlFor="titulo" className="block font-medium text-sm">Título</label>
          <input
            id="titulo"
            type="text"
            placeholder="Informe o título"
            className="w-full border rounded-lg p-2 mt-1 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Campo de Categoria */}
        <div>
          <label htmlFor="categoria" className="block font-medium text-sm">Categoria</label>
          <input
            id="categoria"
            type="text"
            placeholder="Informe a categoria"
            className="w-full border rounded-lg p-2 mt-1 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Campo de Fase */}
        <div>
          <label htmlFor="fase" className="block font-medium text-sm">Fase</label>
          <input
            id="fase"
            type="text"
            placeholder="Informe a fase"
            className="w-full border rounded-lg p-2 mt-1 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Upload de Arquivo */}
        <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
          <img src="src/components/image/upload-icon.svg" alt="Upload" className="w-10 h-10 mb-2" />
          <span className="text-gray-500 text-sm">Upload file</span>
        </div>

        {/* Botão de Adicionar */}
        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
          Adicionar
        </button>
      </form>
    </div>
  </div>
)}

<footer className="fixed inset-x-0 bottom-0 border-t border-gray-200">
        <div className=" text-gray-600 text-center py-4 mt-7">
          <p>&copy; 2021 Easy Meal. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
