import React, { useState } from "react";
import { Link } from "react-router-dom";

const Alunos: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([
    { id: 1, nome: "Estrutura de Dados", classe: "01", curso: "Informática" },
    { id: 2, nome: "Lógica de Programação", classe: "10", curso: "Telecomunicações" },
    { id: 3, nome: "Laço de Repetição", classe: "10", curso: "Informática" },
    { id: 4, nome: "Estrutura Condicional", classe: "10", curso: "Telecomunicações" },
    { id: 5, nome: "Algoritmo", classe: "10", curso: "Informática" },
    { id: 6, nome: "Promises/Await", classe: "10", curso: "Telecomunicações" },
    { id: 7, nome: "Métodos de Arrays", classe: "10", curso: "Informática" },
  ]);
  const [newEntry, setNewEntry] = useState({ nome: "", classe: "", curso: "" });

  const handleInputChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (newEntry.nome && newEntry.classe && newEntry.curso) {
      setTableData([...tableData, { id: tableData.length + 1, ...newEntry }]);
      setNewEntry({ nome: "", classe: "", curso: "" });
      setIsModalOpen(false);
    }
  };


  return (
<div>
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
          <h1 className="font-semibold text-xl">Alunos(119)</h1>
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

    <div className="container mx-auto w-[1240px] mt-11">
    <table className="min-w-full border border-gray-300">
        <thead className="bg-red-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Classe</th>
            <th className="px-4 py-2 text-left">Curso</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id} className="border-t border-gray-300">
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.nome}</td>
              <td className="px-4 py-2">{item.classe}</td>
              <td className="px-4 py-2">{item.curso}</td>
              <td className="px-4 py-2 text-center">⋮</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Registrar Matriz</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <img src="src/image/icone de x.svg" alt="Fechar" className="w-5 h-5" />
              </button>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleAddEntry}>
              <input type="text" name="nome" placeholder="Nome" className="border p-2 rounded" value={newEntry.nome} onChange={handleInputChange} required />
              <input type="text" name="classe" placeholder="Classe" className="border p-2 rounded" value={newEntry.classe} onChange={handleInputChange} required />
              <input type="text" name="curso" placeholder="Curso" className="border p-2 rounded" value={newEntry.curso} onChange={handleInputChange} required />
              <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">Adicionar</button>
            </form>
          </div>
        </div>
      )}

    <footer className="fixed inset-x-0 bottom-0">
        <div className=" text-gray-600 text-center py-4 mt-7">
          <p>&copy; 2021 Easy Meal. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
    
  );
};

export default Alunos;
