export const resetPasswordService = async (token: string, newPassword: string) => {
    const response = await fetch(`https://acessement-ai-production.up.railway.app/reset-password/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ new_password: newPassword }),
    });
  
    if (!response.ok) {
      throw new Error("Erro ao redefinir a senha.");
    }
  
    return await response.json(); 
  };  