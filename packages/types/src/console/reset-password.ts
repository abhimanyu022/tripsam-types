import { z } from "zod";

export const SendOtp = z.object({
  email: z.string().min(1, { message: 'required' }).email({ message: 'invalid' }),
})

export type SanitizedSendOtp = z.infer<typeof SendOtp>

export const VerifyOtp = z.object({
  otp: z.string().min(4, { message: 'required' }),
  email: z.string().optional(),
})

export type SanitizedVerifyOtp = z.infer<typeof VerifyOtp>

