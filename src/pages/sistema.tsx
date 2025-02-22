import { useState } from "react";
import { Link } from "react-router-dom";

interface Aluno {
  id: number;
  nome: string;
  classe: string;
  nota: number;
  categoria: string;
  fase: string;
}

export default function Dashboard() {
  const [isModalOn, setIsModalOn] = useState(false);
  const [alunos, setAlunos] = useState<Aluno[]>([
    { id: 1, nome: "João Tambue", classe: "10", nota: 17.5 , categoria: "Matemática", fase: "1º fase" }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novoAluno, setNovoAluno] = useState<Aluno>({
    id: 0,
    nome: "",
    classe: "",
    nota: 0,
    categoria: "",
    fase: "",
  });

  const totalAlunos = alunos.length;
  const aprovados = alunos.filter(aluno => aluno.nota >= 10).length;
  const reprovados = alunos.filter(aluno => aluno.nota < 10).length;

  const handleAddAluno = () => {
    setAlunos([...alunos, { ...novoAluno, id: totalAlunos + 1 }]);
    setIsModalOpen(false);
    setNovoAluno({ id: 0, nome: "", classe: "", nota: 0, categoria: "", fase: "" });
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
        <a href="#"  className="hover:text-white">Home</a>
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

    <div className="max-w-[1240px] mx-auto mt-10">
      {/* Botões superiores */}
      <div className="flex justify-end mt-6 space-x-2">
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
        <button onClick={() => setIsModalOpen(true)} className="bg-pink-500 text-white px-4 py-2 rounded-lg">
          Adicionar +
        </button>
      </div>
      {/* Resumo */}
      <h2 className="text-xl font-bold mb-4">Resumo</h2>
      <div className="flex space-x-6">
      <div className="bg-white border rounded-lg shadow-sm p-4 flex items-center space-x-4 w-48 h-20">
          <img src="/src/image/Joao.jpg" alt="Aluno" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-gray-500 text-sm">Alunos</p>
            <p className="text-xl font-bold">{totalAlunos}</p>
          </div>
        </div>
        <div className="bg-white border rounded-lg shadow-sm p-4 flex items-center space-x-4 w-48 h-20">
          <div className="p-2 rounded-lg">
            <img src="/src/image/Categories-icon.svg" alt="aprovados" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Aprovados</p>
            <p className="text-xl font-bold">{aprovados}</p>
          </div>
        </div>
        <div className="bg-white border rounded-lg shadow-sm p-4 flex items-center space-x-4 w-48 h-20">
          <div className="p-2 rounded-lg">
            <img src="/src/image/Income-icon.svg" alt="reprovados" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Reprovados</p>
            <p className="text-xl font-bold">{reprovados}</p>
          </div>
        </div>
      </div>

      {/* Resoluções */}
      <h2 className="text-xl font-bold mt-6">Resoluções ({alunos.length})</h2>

      {/* Tabela */}
      <div className="mt-4">
        <table className="w-full border rounded-lg shadow-md">
          <thead>
            <tr className="bg-pink-100 text-left">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nome</th>
              <th className="px-4 py-2">Classe</th>
              <th className="px-4 py-2">Nota</th>
              <th className="px-4 py-2">Categoria</th>
              <th className="px-4 py-2">Fase</th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => setIsModalOn(true)}>⋮</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id} className="border-t">
                <td className="px-4 py-2">{aluno.id}</td>
                <td className="px-4 py-2">{aluno.nome}</td>
                <td className="px-4 py-2">{aluno.classe}</td>
                <td className="px-4 py-2">{aluno.nota}</td>
                <td className="px-4 py-2">{aluno.categoria}</td>
                <td className="px-4 py-2">{aluno.fase}</td>
                <td className="px-4 py-2 cursor-pointer">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de Adição */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-bold mb-4">Adicionar Aluno</h2>
            <input
              type="text"
              placeholder="Nome"
              value={novoAluno.nome}
              onChange={(e) => setNovoAluno({ ...novoAluno, nome: e.target.value })}
              className="border p-2 rounded-lg w-full mb-2"
            />
            <input
              type="text"
              placeholder="Classe"
              value={novoAluno.classe}
              onChange={(e) => setNovoAluno({ ...novoAluno, classe: e.target.value })}
              className="border p-2 rounded-lg w-full mb-2"
            />
            <input
              type="text"
              placeholder="Nota"
              value={novoAluno.nota}
              onChange={(e) => setNovoAluno({ ...novoAluno, nota: Number(e.target.value) })}
              className="border p-2 rounded-lg w-full mb-2"
            />
            <input
              type="text"
              placeholder="Categoria"
              value={novoAluno.categoria}
              onChange={(e) => setNovoAluno({ ...novoAluno, categoria: e.target.value })}
              className="border p-2 rounded-lg w-full mb-2"
            />
            <input
              type="text"
              placeholder="Fase"
              value={novoAluno.fase}
              onChange={(e) => setNovoAluno({ ...novoAluno, fase: e.target.value })}
              className="border p-2 rounded-lg w-full mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
                Cancelar
              </button>
              <button onClick={handleAddAluno} className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                Adicionar
              </button>
            </div>
          </div>
        </div>
      
      )}
      {/* Modal */}
      {isModalOn && (
        <div className="fixed inset-0 flex justify-end">
          {/* Fundo escuro semi-transparente cobrindo toda a tela */}
            <div
                   className="absolute inset-0 bg-black bg-opacity-50"
                      onClick={() => setIsModalOpen(false)} // Fecha ao clicar no fundo
                    ></div>

                    {/* Conteúdo do modal (lado esquerdo da tela) */}
                    <div className="relative bg-white w-[445px] h-full shadow-lg p-6">
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => setIsModalOn(false)}
                          className="px-4 py-2"
                        >
                          <img src="src/image/icone de x.svg" alt="Fechar" className="h-6 w-6" />
                        </button>
                        <h1>200</h1>
                      </div>
                      <div className="flex space-x-4 justify-between items-center">
                        <div className="mt-12">
                            <input type="text" placeholder="Nome" className="h-6 w-28 border-none hover:no-underline" />
                            <input type="text" placeholder="Classe" className="h-6 w-28 border-none hover:no-underline" />
                            <input type="text" placeholder="Categoria" className="h-6 w-28 border-none hover:no-underline" />
                        </div>
                        <div className="mt-20">
                          <p>Curso</p>
                          <p>Lista</p>
                        </div>
                        <div className="mt-20">
                          <p>Fase</p>
                          <p>Estatus</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="mt-16">
                            <p>Categoria</p>
                          </div>
                        </div>
                        <div className="mt-10">
                          <label htmlFor="fileUpload" className="border border-gray-500 p-4 rounded-lg shadow-sm flex items-center justify-center h-60 cursor-pointer">
                          <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4m0 0l4 4m-4-4v12M5 12h14" />
                </svg>
              <span className="text-gray-500 text-sm">Upload file</span>
                          </label>
                          <input type="file" id="fileUpload" className="hidden" />
  
                          <div className="flex justify-center mt-4">
                            <button className="bg-pink-500 text-black px-4 py-2 rounded-lg border border-pink-200 shadow-sm w-[402px]">
                            <p>Download</p>
                          </button>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
    </div>
    </div>
  );
}
