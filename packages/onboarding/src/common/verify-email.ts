import { z } from "zod";

export const sendOtp = z.object({
  email: z.email('invalid').nonempty('required').trim().toLowerCase(),
})

export const verifyOtp = z.object({
  otp: z.string().min(4, { message: 'required' }),
  email: z.string().optional(),
})

export const verifyOtpResponse = z.object({
  id: z.string(),
})

export type SafeSendOtp = z.output<typeof sendOtp>
export type SafeVerifyOtp = z.output<typeof verifyOtp>
export type SafeVerifyOtpResponse = z.output<typeof verifyOtpResponse>
