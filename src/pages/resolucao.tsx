import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

interface DataItem {
    id: number;
    title: string;
    category: string;
    phase: string;
    date: string;
  }


  

const Resolucao: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([
      ]);
    
      const [editingItem, setEditingItem] = useState<DataItem | null>(null);
      const [editedValues, setEditedValues] = useState<DataItem | null>(null);
      const [showModal, setShowModal] = useState(false);
      const [newItem, setNewItem] = useState<DataItem>({ id: 0, title: "", category: "", phase: "", date: "" });
    
      const handleEdit = (item: DataItem) => {
        setEditingItem(item);
        setEditedValues({ ...item });
      };
    
      const handleSave = () => {
        if (editedValues) {
          setData((prevData) => prevData.map((item) => (item.id === editedValues.id ? editedValues : item)));
          setEditingItem(null);
        }
      };
    
      const handleDelete = (id: number) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      };
    
      const handleAdd = () => {
        setData((prevData) => [...prevData, { ...newItem, id: prevData.length + 1 }]);
        setNewItem({ id: 0, title: "", category: "", phase: "", date: "" });
        setShowModal(false);
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
                <a href="#"  className="hover:text-white"> <Link to="/sistema">Home</Link></a>
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
        <h1 className="font-semibold text-xl">Resoluções(12)</h1>
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

          <button onClick={() => setShowModal(true)}
            className="bg-pink-100 text-black px-4 py-2 rounded-lg flex items-center space-x-1 border border-pink-200 shadow-sm" 
            
          >
            <span onClick={() => setShowModal(true)}>Adicionar</span>
            <span onClick={() => setShowModal(true)}>+</span>
          </button>

          <button className="bg-pink-100 text-black px-4 py-2 rounded-lg flex items-center space-x-1 border border-pink-200 shadow-sm">
            <span>Publicar</span>
            <span>+</span>
          </button>
        </div>
      </section>

      <div className="overflow-x-auto max-w-[1240px] mx-auto mt-10">
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
          {data.length === 0 ? (
  <tr>
    <td colSpan="6" className="py-4 text-center text-gray-500">
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
  data.map((item) => (
    <tr key={item.id} className="border-b border-gray-200">
      <td className="py-3 px-6">{item.id}</td>
      <td className="py-3 px-6">
        {editingItem?.id === item.id ? (
          <input
            type="text"
            defaultValue={editedValues?.title || item.title}
            onChange={(e) =>
              setEditedValues((prev) => ({ ...prev!, title: e.target.value }))
            }
            className="border p-1"
          />
        ) : (
          item.title
        )}
      </td>
      <td className="py-3 px-6">
        {editingItem?.id === item.id ? (
          <input
            type="text"
            defaultValue={editedValues?.category || item.category}
            onChange={(e) =>
              setEditedValues((prev) => ({ ...prev!, category: e.target.value }))
            }
            className="border p-1"
          />
        ) : (
          item.category
        )}
      </td>
      <td className="py-3 px-6">
        {editingItem?.id === item.id ? (
          <input
            type="text"
            defaultValue={editedValues?.phase || item.phase}
            onChange={(e) =>
              setEditedValues((prev) => ({ ...prev!, phase: e.target.value }))
            }
            className="border p-1"
          />
        ) : (
          item.phase
        )}
      </td>
      <td className="py-3 px-6">
        {editingItem?.id === item.id ? (
          <input
            type="text"
            defaultValue={editedValues?.date || item.date}
            onChange={(e) =>
              setEditedValues((prev) => ({ ...prev!, date: e.target.value }))
            }
            className="border p-1"
          />
        ) : (
          item.date
        )}
      </td>
      <td className="py-3 px-6 flex gap-2">
        {editingItem?.id === item.id ? (
          <button onClick={handleSave} className="text-green-500">
            Salvar
          </button>
        ) : (
          <button onClick={() => handleEdit(item)} className="text-gray-500">
            <img src="src/image/escrever.png" alt="Editar" className="w-5 h-5" />
          </button>
        )}
        <button onClick={() => handleDelete(item.id)} className="text-red-500">
          <img src="src/image/delete.png" alt="Deletar" className="w-5 h-5" />
        </button>
      </td>
    </tr>
  ))
)}

          </tbody>
        </table>
      </div>

      {/* Modal para adicionar novo item */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Registrar Matriz</h2>
            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">×</button>
          </div>
      
          <input
            type="text"
            placeholder="Informe o título"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            className="border p-2 w-full mb-3 rounded"
          />
      
          <input
            type="text"
            placeholder="Informe a categoria"
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
            className="border p-2 w-full mb-3 rounded"
          />
      
          <input
            type="text"
            placeholder="Informe a fase"
            value={newItem.phase}
            onChange={(e) => setNewItem({ ...newItem, phase: e.target.value })}
            className="border p-2 w-full mb-3 rounded"
          />
      
           <div className="border-dashed border-2 border-gray-300 p-6 flex flex-col items-center justify-center mb-4 rounded cursor-pointer relative">
              <input 
                type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    onChange={(e) => console.log(e.target.files)} 
                     />
                <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4m0 0l4 4m-4-4v12M5 12h14" />
                </svg>
              <span className="text-gray-500 text-sm">Upload file</span>
            </div>
          <button
            onClick={handleAdd}
            className="bg-red-500 text-white px-4 py-2 rounded w-full"
          >
            Adicionar
          </button>
        </div>
      </div>
      
      )}

    </div>
  );
};
export default Resolucao;
