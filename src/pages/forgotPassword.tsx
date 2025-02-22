import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForgot } from "../service/authentication/useForgot";
import { Mail, StepForward } from "lucide-react";
import { ButtonProp } from "../components/autentication-components/button";
import { HeaderAutentification } from "../components/autentication-components/header";

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { mutate: forgot, isPending } = useForgot();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    forgot(email); // Chama a API de recuperação de senha
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
            <p className="w-[400px] text-gray-500">
              Informe seu e-mail para recuperar a senha. Um link será enviado para redefinir sua senha.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-7 w-[398px]">
            <p className="font-normal text-sm">Seu e-mail</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="flex gap-2 items-center border px-2 h-12 rounded-lg">
                <Mail className="text-gray-300" />
                <input
                  type="email"
                  name="email"
                  className="flex-1 text-xs h-full text-gray-400 font-sans border-none outline-none focus:ring-0"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Digite o seu e-mail"
                  required
                />
              </div>
              <ButtonProp variant="primary" type="submit" disabled={isPending}>
                {isPending ? "Enviando..." : "Enviar"}
                <StepForward />
              </ButtonProp>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
