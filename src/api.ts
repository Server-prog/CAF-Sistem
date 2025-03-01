import axios from "axios";

// Define a URL base da API (ajuste conforme necessário)
const API_URL = "https://sua-api.com"; // Troque pelo URL correto

// Cria uma instância do Axios para reutilizar nas requisições
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para buscar os estudantes
export const getStudents = async () => {
  try {
    const response = await api.get("/get-student");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar estudantes:", error);
    return [];
  }
};

export default api;
