import { z } from "zod";

export const create = z.object({
  name: z.string().trim().nonempty('required'),
  area: z.string().trim().nonempty('required'),
  kind: z.enum(['hotel','safari']),
  startLat: z.coerce.number(),
  startLng: z.coerce.number(),
  endLat: z.coerce.number(),
  endLng: z.coerce.number(),
  state: z.string().nonempty('required'),
  city: z.string().nonempty('required')
});

export const update = z.object({
  id: z.uuid().optional(),
  name: z.string().trim().nonempty('required'),
  area: z.string().trim().nonempty('required'),
  kind: z.enum(['hotel','safari']),
  startLat: z.coerce.number(),
  startLng: z.coerce.number(),
  endLat: z.coerce.number(),
  endLng: z.coerce.number(),
  state: z.string().nonempty('required'),
  city: z.string().nonempty('required')
});

export const me = z.object({
  id: z.string(),
  name: z.string(),
  area: z.string().nullable().optional(),
  kind: z.string(),
  startLat: z.coerce.number(),
  startLng: z.coerce.number(),
  endLat: z.coerce.number(),
  endLng: z.coerce.number(),
  address: z.any(),
  metadata: z.any(),
  tags: z.array(z.any()),
  landmarks: z.array(z.any())
})

export const minimum = z.object({
  id: z.string(),
  name: z.string(),
  area: z.string().nullable().optional(),
  kind: z.string(),
  startLat: z.coerce.number(),
  startLng: z.coerce.number(),
  endLat: z.coerce.number(),
  endLng: z.coerce.number()
})

export const paginatedMe = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(10),
  total: z.coerce.number().int().min(1).default(1000),
  list: z.array(minimum)
})

export type SafeCreate = z.output<typeof create>;
export type SafeUpdate = z.output<typeof update>;
export type SafePaginatedMe = z.output<typeof paginatedMe>
export type SafeMe = z.infer<typeof me>
export type SafeMinimum = z.output<typeof minimum>