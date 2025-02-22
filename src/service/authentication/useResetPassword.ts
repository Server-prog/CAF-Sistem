import { useMutation } from "@tanstack/react-query";
import { resetPasswordService } from "../authentication/resetPasswordService.ts";

export const useResetPassword = () => {
  return useMutation({
    mutationFn: ({ token, newPassword }: { token: string; newPassword: string }) =>
      resetPasswordService(token, newPassword),
    onSuccess: (data) => {
      console.log("Senha alterada com sucesso:", data);
      alert("Sua senha foi redefinida com sucesso!");
    },
    onError: (error) => {
      console.error("Erro ao redefinir senha:", error);
      alert("Erro ao redefinir senha. Verifique se o link é válido.");
    },
  });
};