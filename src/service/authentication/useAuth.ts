import { useMutation } from "@tanstack/react-query";
import { login as loginService } from "./authService";
import { LoginInput } from "../../types/auth";

export const useLogin = () => {
  return useMutation({
    mutationFn: (input: LoginInput) => loginService(input),
    onSuccess: (token) => {
      localStorage.setItem("token", token);
      window.location.href = "/sistema";
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};