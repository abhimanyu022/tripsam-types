import { z } from "zod";

export const updatePassword = z.object({
  password: z.string().nonempty('required').min(8, 'min').max(20, 'max'),
  oldPassword: z.string().nonempty('required')
})

export const updateProfile = z.object({
  country: z.string().optional().default('+91'),
  fullName: z.string()                     // key must be present (not undefined)
    .transform(s => s.trim())
    .refine(s => s === '' || s.length >= 3, { message: 'min' }),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\d{7,12}$/, { message: 'invalid' }),
})

export const verifyOtp = z.object({
  otp: z.string().min(4, { message: 'required' })
})

export const updateUsername = z.object({
  fullName: z.string().nonempty('required').min(3, 'min').max(50, 'max').trim(),
})

export type SafeUpdateUsername = z.infer<typeof updateUsername>
export type SafeVerifyOtp = z.infer<typeof verifyOtp>
export type SafeUpdateProfile = z.infer<typeof updateProfile>
export type SafeUpdatePassword = z.infer<typeof updatePassword>



