import React from "react";


type ButtonProps = {
    children : React.ReactNode;
    variant : "primary" | "secondary";
    onClick? : () => void;  // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const ButtonProp : React.FC<ButtonProps> = ({children , variant = "primary", onClick })=> {

    const styles: Record<string,string> = {
        primary : "w-full bg-rose-600 hover:bg-rose-700 ease-in-out h-14 rounded-xl flex gap-2 items-center justify-center text-zinc-50",
        secondary : "w-full bg-zinc-300 h-14 rounded-xl flex gap-2 items-center justify-center hover:bg-zinc-500 hover:text-zinc-100 ease-in text-zinc-600 ",
    };
    return (
         <button type="submit" className={styles[variant]} onClick={onClick}>
          {children}
         </button>
     
    )
}