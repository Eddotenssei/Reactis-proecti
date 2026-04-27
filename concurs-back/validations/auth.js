import { z } from "zod";

export const registerSchema = z.object({
  first_name: z.string().max(100),
  last_name: z.string().max(100),
  email: z.string().email(),
  phone: z.string().max(20),
  class: z.string().max(50),
  region: z.string().max(100),
  username: z.string().max(100),
  password: z.string().min(6).max(100),
});

export const loginSchema = registerSchema.pick({
  email: true,
  password: true,
});