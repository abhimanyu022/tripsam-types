import { z } from "zod";

export const checkMe = z.object({
  email: z.email('invalid').nonempty('required').trim().toLowerCase(),
})

export const login = z.object({
  username: z.string().min(1, { message: 'required' }).trim().toLowerCase(),
  password: z.string().min(1, { message: 'required' })
})

export const sendOtp = z.object({
  email: z.email('invalid').nonempty('required').trim().toLowerCase(),
})

export const verifyOtp = z.object({
  otp: z.string().min(4, { message: 'required' }),
  email: z.string().optional(),
})

export type SafeCheckMe = z.output<typeof checkMe>
export type SafeLogin = z.output<typeof login>
export type SafeSendOtp = z.output<typeof sendOtp>
export type SafeVerifyOtp = z.output<typeof verifyOtp>



