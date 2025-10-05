import { z } from "zod";

export const sendOtp = z.object({
  email: z.email('invalid').nonempty('required').trim().toLowerCase(),
})

export type SafeSendOtp = z.output<typeof sendOtp>

export const verifyOtp = z.object({
  otp: z.string().min(4, { message: 'required' }),
  email: z.string().optional(),
})

export type SafeVerifyOtp = z.output<typeof verifyOtp>

export const onboard = z.object({
  email: z.string().optional(),
  token: z.string().optional(),
  countryCode: z.string().optional().default('+91'),
  name: z.string().trim().nonempty('required').min(3, 'min'),
  phone: z
    .string()
    .trim()
    .regex(/^\d{7,12}$/, { message: 'invalid' }),
  password: z.string().nonempty('required').min(8, 'min').max(20, 'max'),
})

export type SafeOnboard = z.output<typeof onboard>

