import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPassword } from "../service/authentication/useResetPassword";
import { Lock, Unlock } from "lucide-react";
import { ButtonProp } from "../components/autentication-components/button";

export const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const { token } = useParams(); // Obtém o token da URL
  const navigate = useNavigate();
  const { mutate: resetPassword, isPending } = useResetPassword();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token) {
      resetPassword({ token, newPassword });
    } else {
      alert("Token inválido ou ausente.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col mt-28">
        <div className="flex flex-col gap-4">
          <p className="font-sans text-3xl font-black text-zinc-950">
            Redefinir Senha
          </p>
          <p className="w-[400px] text-gray-500">
            Digite sua nova senha para redefini-la.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-7 w-[398px]">
          <p className="font-normal text-sm">Nova senha</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div className="flex gap-2 items-center border px-2 h-12 rounded-lg">
              <Lock className="text-gray-300" />
              <input
                type="password"
                name="newPassword"
                className="flex-1 text-xs h-full text-gray-400 font-sans border-none outline-none focus:ring-0"
                value={newPassword}
                onChange={handleInputChange}
                placeholder="Digite sua nova senha"
                required
              />
            </div>
            <ButtonProp variant="primary" type="submit" disabled={isPending}>
              {isPending ? "Alterando..." : "Alterar Senha"}
              <Unlock />
            </ButtonProp>
          </form>
        </div>
      </div>
    </>
  );
};
