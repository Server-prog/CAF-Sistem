export const forgotPasswordService = async (email: string) => {
  const response = await fetch("https://acessement-ai-production.up.railway.app/forget-pass", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Erro ao solicitar recuperação de senha.");
  }

  return await response.json();
};
  