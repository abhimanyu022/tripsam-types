import { z } from "zod";

export const create = z.object({
  label: z.string().trim().min(1, 'required'),
  distance: z.coerce.number().nonnegative('invalid'),
  type: z.string().trim().optional(),
  notes: z.string().trim().optional(),
});

export const update = z.object({
  id: z.string().uuid().optional(),
  label: z.string().trim().min(1, 'required'),
  distance: z.coerce.number().nonnegative('invalid'),
  type: z.string().trim().optional(),
  notes: z.string().trim().optional(),
});

export type SafeCreate = z.infer<typeof create>;
export type SafeUpdate = z.infer<typeof update>;