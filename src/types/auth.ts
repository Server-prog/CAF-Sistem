import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  rememberMe: z.boolean().optional(),
});

export type LoginInput = z.infer<typeof LoginSchema>;