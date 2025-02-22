import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

interface Dado {
  id: number;
  titulo: string;
  categoria: number;
  fase: number;
  data: string;
}

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const [dados, setDados] = useState<Dado[]>([]);
  const [editando, setEditando] = useState<number | null>(null);
  const [novoDado, setNovoDado] = useState<Dado>({ id: 0, titulo: "", categoria: 0, fase: 0, data: "" });

  const handleEdit = (index: number) => {
    setEditando(index);
    setNovoDado(dados[index]);
  };

  const handleDelete = (index: number) => {
    setDados(dados.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNovoDado({ ...novoDado, [name]: value });
  };

  const handleSave = (index: number) => {
    const novosDados = [...dados];
    novosDados[index] = novoDado;
    setDados(novosDados);
    setEditando(null);
  };


  
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

      <div className="container mx-auto w-[1240px] mt-11">
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
            {dados.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-3 px-6 text-center text-gray-500">
                  <div className="mt-5">
                    <div className="flex justify-center mr-5">
                      <FileText className="w-20 h-20 text-gray-500" />
                    </div>
                  <div className="mt-10">
                    <p>Nenhum dado encontrado. Insira novos dados na tabela.</p>
                  </div>
                </div>
              </td>
              </tr>
            ) : (
              dados.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  {editando === index ? (
                    <>
                      <td className="py-3 px-6"><input type="text" name="id" value={novoDado.id} className="border p-1" /></td>
                      <td className="py-3 px-6"><input type="text" name="titulo" value={novoDado.titulo} onChange={handleChange} className="border p-1" /></td>
                      <td className="py-3 px-6"><input type="number" name="categoria" value={novoDado.categoria} onChange={handleChange} className="border p-1" /></td>
                      <td className="py-3 px-6"><input type="number" name="fase" value={novoDado.fase} onChange={handleChange} className="border p-1" /></td>
                      <td className="py-3 px-6"><input type="text" name="data" value={novoDado.data} onChange={handleChange} className="border p-1" /></td>
                      <td className="py-3 px-6">
                        <button onClick={() => handleSave(index)} className="text-green-500 mr-2">Salvar</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-3 px-6">{item.id}</td>
                      <td className="py-3 px-6">{item.titulo}</td>
                      <td className="py-3 px-6">{item.categoria}</td>
                      <td className="py-3 px-6">{item.fase}</td>
                      <td className="py-3 px-6">{item.data}</td>
                      <td className="py-3 px-6">
                        <button onClick={() => handleEdit(index)} className="text-gray-500 mr-2">
                          <img src="/src/image/escrever.png" alt="Editar" />
                        </button>
                        <button onClick={() => handleDelete(index)} className="text-red-500">
                          <img src="/src/image/delete.png" alt="Deletar" />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
          </tbody>
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
        <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer relative">
      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleImageChange}
      />
      {image ? (
        <img src={image} alt="Uploaded" className="w-24 h-24 object-cover rounded-lg mb-2" />
      ) : (
        <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4m0 0l4 4m-4-4v12M5 12h14" />
                </svg>
      )}
      <span className="text-gray-500 text-sm">{image ? "Imagem carregada" : "Upload file"}</span>
    </div>


        {/* Botão de Adicionar */}
        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
          Adicionar
        </button>
      </form>
    </div>
  </div>
        )}
    </div>
  );
}

export default Home;
