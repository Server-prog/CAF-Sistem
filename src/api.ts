import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

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
