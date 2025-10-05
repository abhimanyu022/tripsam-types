import { z } from "zod";

export const paginated = z.object({
  q: z.string().trim().toLowerCase().optional().default(''),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

export type SafePaginated = z.output<typeof paginated>;