import { useState, useEffect } from "react";
import { getStudents } from "../api";
interface Student {
  Nome: string;
  Classe: string;
  Turma: string;
  Curso: string;
}

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (err) {
        setError("Erro ao carregar estudantes");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return { students, loading, error };
};
