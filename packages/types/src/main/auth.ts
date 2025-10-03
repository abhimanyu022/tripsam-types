import { z } from "zod";

export const CheckUser = z.object({
  email: z.string().min(1, { message: 'required' }).email({ message: 'invalid' }).trim().toLowerCase(),
})

export type SanitizedCheckUser = z.infer<typeof CheckUser>

export const Login = z.object({
  username: z.string().min(1, { message: 'required' }).trim().toLowerCase(),
  password: z.string().min(1, { message: 'required' })
})

export type SanitizedLogin = z.infer<typeof Login>



