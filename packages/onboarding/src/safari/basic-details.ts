import { z } from "zod";

export const me = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().trim().optional().default(''),
  countryCode: z.string().optional().default('+91'),
  phoneNumber: z.string().optional().default(''),
  isPhoneVerified: z.boolean().optional().default(false),
  completed: z.boolean()
});

export const update = z.object({
  name: z.string().nonempty('required').trim(),
  countryCode: z.string().optional().default('+91'),
  phoneNumber: z.string().nonempty('required')
});

export type SafeMe = z.infer<typeof me>;
export type SafeUpdate = z.output<typeof update>

