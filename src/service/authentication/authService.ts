import { LoginInput } from "../../types/auth";

export const login = async (input: LoginInput) => {
  const response = await fetch("https://acessement-ai-production.up.railway.app", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  console.log("Resposta da API:", data); // Log da resposta
  return data.token;
};