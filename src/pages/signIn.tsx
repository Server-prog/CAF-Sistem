import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginInput } from "../types/auth";
import { HeaderAutentification } from "../components/autentication-components/header";
import { Lock, Mail } from "lucide-react";
import { ButtonProp } from "../components/autentication-components/button";
import { useLogin } from "../service/authentication/useAuth";

export const SignIn: React.FC = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutate: login, isPending } = useLogin();

  const onSubmit = (data: LoginInput) => {
    console.log ("Chegou...");
    login(data);
  };

  return (
    <>
      <HeaderAutentification />
      <section className="flex items-center justify-center mt-16">
        <div className="w-[400px] flex flex-col gap-8">
          <h1 className="font-sans font-bold text-3xl">Entrar no sistema</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="font-medium text-sm">
                Seu email
              </label>
              <div className="flex gap-1 items-center border h-12 px-4 rounded-xl">
                <Mail className="text-zinc-400" />
                <input
                  id="email"
                  {...register("email")}
                  className="flex-1 border-none outline-none focus:ring-0"
                  type="email"
                  placeholder="Informe o seu email"
                  aria-label="Informe o seu email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="password" className="font-medium text-sm">
                Sua senha
              </label>
              <div className="flex gap-1 items-center border h-12 px-4 rounded-xl">
                <Lock className="text-zinc-400" />
                <input
                  id="password"
                  {...register("password")}
                  className="flex-1 border-none outline-none focus:ring-0"
                  type="password"
                  placeholder="Informe a sua senha"
                  aria-label="Informe a sua senha"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Manter logado */}
            <div className="flex gap-3 items-center text-zinc-400">
              <input
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
              />
              <label htmlFor="rememberMe">Manter logado por 15 dias</label>
            </div>

            <ButtonProp variant="primary" type="submit" disabled={isPending}> 
              {isPending ? "Entrando..." : "Entrar no sistema"}
            </ButtonProp>
          </form>

          <div className="flex items-center justify-center gap-2">
            <p className="text-zinc-400 text-base font-normal">
              Esqueceu sua senha?
            </p>
            <button onClick={() => navigate("/forgot-password")} className="text-rose-600 text-base font-bold">
              Recuperar senha
            </button>
          </div>
        </div>
      </section>
    </>
  );
};