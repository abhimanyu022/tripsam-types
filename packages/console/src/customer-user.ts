import { z } from "zod";

export const me = z.object({
  fullName: z.string().optional().default(''),
  email: z.string().optional().default(''),
  provider: z.string(),
  phone: z.string().optional().default(''),
  countryCode: z.string().optional().default('+91'),
  updatedAt: z.string()
});

export const paginatedMe = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(10),
  total: z.coerce.number().int().min(1).default(1000),
  list: z.array(me)
})

export type SafeMe = z.output<typeof me>;
export type SafePaginatedMe = z.output<typeof paginatedMe>