import { z } from "zod";

export const SendOtp = z.object({
  email: z.string().min(1, { message: 'required' }).email({ message: 'invalid' }).trim().toLowerCase(),
})

export type SanitizedSendOtp = z.infer<typeof SendOtp>

export const VerifyOtp = z.object({
  otp: z.string().min(4, { message: 'required' }),
  email: z.string().optional(),
})

export type SanitizedVerifyOtp = z.infer<typeof VerifyOtp>

export const OboardUser = z.object({
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

export type SanitizedOboardUser = z.infer<typeof OboardUser>

