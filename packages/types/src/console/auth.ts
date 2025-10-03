import { z } from "zod";

export const Login = z.object({
  username: z.string().min(1, { message: 'required' }).trim().toLowerCase(),
  password: z.string().min(1, { message: 'required' }),
})

export type SanitizedLogin = z.infer<typeof Login>

export const TwoFactorAuthentication = z.object({
  otp: z.string().min(4, { message: 'required' }),
  email: z.string().optional()
})

export type SanitizedTwoFactorAuthentication = z.infer<typeof TwoFactorAuthentication>

