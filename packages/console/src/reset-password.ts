import { z } from "zod";

export const SendOtpSchema = z.object({
  email: z.email('invalid').nonempty('required')
})

export const VerifyOtp = z.object({
  otp: z.string().nonempty('required').length(4, 'invalid').regex(/^\d+$/, 'numberOnly'),
  email: z.string().optional(),
})

export type SafeSendOtp = z.output<typeof SendOtpSchema>
export type SafeVerifyOtp = z.output<typeof VerifyOtp>

