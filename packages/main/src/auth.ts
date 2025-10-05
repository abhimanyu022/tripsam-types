import { z } from "zod";

export const checkMe = z.object({
  email: z.email('invalid').nonempty('required').trim().toLowerCase(),
})

export type SafeCheckMe = z.output<typeof checkMe>

export const login = z.object({
  username: z.string().min(1, { message: 'required' }).trim().toLowerCase(),
  password: z.string().min(1, { message: 'required' })
})

export type SafeLogin = z.output<typeof login>



