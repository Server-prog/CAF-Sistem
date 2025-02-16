import React from "react";
import { ButtonProp } from "../components/autentication-components/button";
import { HeaderAutentification } from "../components/autentication-components/header";
import {Send} from 'lucide-react'


export const EmailConfirmation : React.FC = () =>  {




    return (
        <>
        <HeaderAutentification/>
        <section className=" flex flex-col items-center justify-center mt-2 ">
            <div className="w-[400px] flex flex-col gap-8">
            <div className="w-[350px] h-[268px]">
                <img className="w-full h-full" src="./sendingEmail.svg" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4">
                <p className="font-black text-3xl font-sans"> Verificar email</p>
                <p>Foi enviado um link para o seu email, 
              <b className="text-rose-600">“antoniocamposgabriel@gmail.com”</b>, acesse e
                clique o link para redefinir as tuas credenciais.</p>
                <ButtonProp variant="secondary">
                    Reenviar um email 
                    <Send size={24} />
                </ButtonProp>
            </div>
            </div>
            
        </section>
        </>
    )
}