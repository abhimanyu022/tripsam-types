import { z } from "zod";

export const sendOtp = z.object({
  email: z.email('invalid').nonempty('required').trim().toLowerCase(),
})

export type SafeSendOtp = z.infer<typeof sendOtp>

export const verifyOtp = z.object({
  otp: z.string().min(4, { message: 'required' }),
  email: z.string().optional(),
})

export type SafeVerifyOtp = z.infer<typeof verifyOtp>

export const updatePassword = z.object({
  email: z.string().optional(),
  token: z.string().optional(),
  password: z.string().nonempty('required').min(8, 'min').max(20, 'max')
})

export type SafeUpdatePassword = z.infer<typeof updatePassword>

