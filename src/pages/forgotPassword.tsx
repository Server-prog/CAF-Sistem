import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonProp } from "../components/autentication-components/button";
import { HeaderAutentification } from "../components/autentication-components/header";
import { Mail, StepForward } from "lucide-react";

export const ForgotPassword: React.FC = () => {
  const [userData, setUserData] = useState({ email: "" });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Correção aqui
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Correção aqui
    console.log("Email digitado:", userData.email);
    navigate("/forgot-password", { replace: true });
  };

  return (
    <>
      <div>
        <HeaderAutentification />
        <section className="flex items-center justify-center flex-col mt-28">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-3xl font-black text-zinc-950">
              Recuperar senha
            </p>
            <p className="w-[400px] text-gray-300">
              Informe seu email para recuperar a senha, será enviado um email
              com um link para redefinir a senha.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-7 w-[398px]">
            <p className="font-normal text-sm">Seu email</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="flex gap-2 items-center border px-2 h-12 rounded-lg">
                <Mail className="text-gray-300" />
                <input
                  type="email"
                  name="email" // Correção aqui
                  className="flex-1 text-xs h-full text-gray-400 font-sans border-none outline-none focus:ring-0"
                  value={userData.email}
                  onChange={handleInputChange}
                  placeholder="Digite o seu email"
                  required
                />
              </div>
              <ButtonProp  variant="primary">
                Continuar
                <StepForward />
              </ButtonProp>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
