import { useMutation } from "@tanstack/react-query";
import { forgotPasswordService } from "./forgotPasswordService";

export const useForgot = () => {
  return useMutation({
    mutationFn: (email: string) => forgotPasswordService(email),
    onSuccess: (data) => {
      console.log("Recuperação solicitada com sucesso:", data);
      alert("Um link de recuperação foi enviado para o seu e-mail.");
    },
    onError: (error) => {
      console.error("Erro ao recuperar senha:", error);
      alert("Erro ao recuperar senha. Verifique o e-mail informado.");
    },
  });
};
