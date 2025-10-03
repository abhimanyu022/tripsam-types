// api/console/location/schema.ts
import { z } from "zod";

/**
 * Query: getAll tags with optional search + pagination
 */
export const GetTag = z.object({
  q: z.string().trim().optional().default(""),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

/**
 * Body: create a tag
 */
export const CreateTag = z.object({
  name: z.string().trim().min(1, "required"),
});

/**
 * Body: update a tag
 */
export const UpdateTag = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1, "required"),
});

export type SanitizedGetTag = z.infer<typeof GetTag>;
export type SanitizedCreateTag = z.infer<typeof CreateTag>;
export type SanitizedUpdateTag = z.infer<typeof UpdateTag>;

export const TagSchema = z.object({
  id: z.string(),
  name: z.string()
})

export type TagDTO = z.infer<typeof TagSchema>

export const TagListResponseSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
  total: z.number(),
  list: z.array(TagSchema)
})
