import { z } from "zod";

export const me = z.object({
  adhaarNumber: z.string().trim(),
  address: z.string().trim()
});

export const save = z.object({
  adhaarNumber: z.string().trim().nonempty('required'),
  address: z.string().trim().nonempty('required')
});

export type SafeMe = z.infer<typeof me>;
export type SafeSave = z.output<typeof save>

