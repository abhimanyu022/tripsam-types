import { z } from "zod";

export const get = z.object({
  id: z.string(),
  baseRate: z.coerce.number().default(0),
  discount: z.coerce.number().default(0),
});

export const create = z.object({
  baseRate: z.coerce.number().default(0),
  discount: z.coerce.number().default(0),
});

export const update = z.object({
  id: z.string().optional().default(''),
  ...create.shape,
});

export type SafeGet = z.infer<typeof get>;
export type SafeUpdate = z.output<typeof update>
export type SafeCreate = z.output<typeof create>
