import { z } from "zod";

export const LoginSchema = z.object({
  username: z.email('invalid').trim().toLowerCase(),
  password: z.string().trim().nonempty('required')
})

export type SafeLogin = z.output<typeof LoginSchema>

export const TFASchema = z.object({
  otp: z.string().nonempty('required').length(4, 'invalid').regex(/^\d+$/, 'numberOnly'),
  email: z.string().optional() // throw 500 later
});

export type SafeTFA = z.infer<typeof TFASchema>

