import { z } from "zod";

export const create = z.object({
  name: z.string().trim().min(1, 'required').toLowerCase()
});

export const update = z.object({
  id: z.uuid().optional(),
  name: z.string().trim().min(1, 'required').toLowerCase(),
});

export const ids = z.array(z.uuid('invalid').nonempty('required'));

export const me = z.object({
  id: z.string(),
  name: z.string()
})

export const paginatedMe = z.object({
  page: z.number(),
  pageSize: z.number(),
  total: z.number(),
  list: z.array(me)
})

export type SafeMe = z.infer<typeof me>
export type SafeCreate = z.output<typeof create>;
export type SafeUpdate = z.output<typeof update>;
export type SafeIds = z.output<typeof ids>;
export type SafePaginatedMe = z.output<typeof paginatedMe>;