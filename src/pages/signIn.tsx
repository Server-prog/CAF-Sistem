import React from "react";
import { HeaderAutentification } from "../components/autentication-components/header";
import { Lock, Mail } from "lucide-react";
import { ButtonProp } from "../components/autentication-components/button";
import { Link } from "react-router-dom";



export const SignIn: React.FC = () => {
    return (
        <>
            <HeaderAutentification />
            <section className="flex items-center justify-center mt-16">
                <div className="w-[400px] flex flex-col gap-8">
                    <h1 className="font-sans font-bold text-3xl">Entrar no sistema</h1>
                    <form action="" className="flex flex-col gap-7">
                        {/* Campo de e-mail */}
                        <div className="flex flex-col gap-3">
                            <label htmlFor="email" className="font-medium text-sm">Seu email</label>
                            <div className="flex gap-1 items-center border h-12 px-4 rounded-xl">
                                <Mail className="text-zinc-400" />
                                <input id="email" className="flex-1 border-none 
                                outline-none focus:ring-0" type="email" placeholder="Informe o seu email" 
                                aria-label="Informe o seu email" />
                            </div>
                        </div>

                        {/* Campo de senha */}
                        <div className="flex flex-col gap-3">
                            <label htmlFor="password" className="font-medium text-sm">Sua senha</label>
                            <div className="flex gap-1 items-center border h-12 px-4 rounded-xl">
                                <Lock className="text-zinc-400" />
                                <input id="password" type="password" className="flex-1 border-none 
                                outline-none focus:ring-0" placeholder="Informe a sua senha"
                                 aria-label="Informe a sua senha" />
                            </div>
                        </div>

                        {/* Manter logado */}
                        <div className="flex gap-3 items-center text-zinc-400">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Manter logado por 15 dias</label>
                        </div>

                        {/* Botão de Login */}
                        <ButtonProp variant="primary">
                           <Link to="/sistema">Entrar no sistema</Link> 
                        </ButtonProp>
                    </form>

                    {/* Link para recuperação de senha */}
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-zinc-400 text-base font-normal">
                            Esqueceu sua senha?</p>
                        <Link to="/forgot-password" className="text-rose-600 
                        text-base font-bold">Recuperar senha</Link>
                    </div>
                </div>
            </section>
        </>
    );
};
