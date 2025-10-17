import { z } from "zod";

export const me = z.object({
  id: z.string(),
  driverName: z.string().trim(),
  licenseNumber: z.string().trim().toUpperCase(),
  experience: z.coerce.number()
});

export const create = z.object({
  driverName: z.string().trim().nonempty('required'),
  licenseNumber: z.string().trim().nonempty('required').toUpperCase(),
  experience: z.coerce.number().min(1, 'min')
});

export const meList = z.array(me)

export type SafeMe = z.infer<typeof me>;
export type SafeCreate = z.output<typeof create>
export type SafeList = z.output<typeof meList>

