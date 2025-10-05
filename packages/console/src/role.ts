import { z } from "zod";

export const create = z.object({
  name: z.string().trim().nonempty('required'),
  description: z.string().trim().optional().default(''),
});

export const update = z.object({
  name: z.string().trim().nonempty('required'),
  description: z.string().trim().optional().default(''),
  permissions: z.array(z.string()),
});

export const minimum = z.object({
  id: z.string(),
  name: z.string().trim().nonempty('required')
});

export const permissionIds = z.array(z.uuid().nonempty('required'));

export const me = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable().optional(),
  isSystem: z.boolean(),
  version: z.number(),
  permissions: z.array(z.string()),
  updatedAt: z.string().refine((s) => !Number.isNaN(Date.parse(s)), "invalid ISO date"),
  isActive: z.boolean(),
});

export const paginatedMe = z.object({
  list: z.array(me),
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
});

export const minimumList = z.object({
  list: z.array(minimum)
});


// export type SanitizedGetRole = z.infer<typeof GetRole>
export type SafeMe = z.output<typeof me>;
export type SafeCreate = z.output<typeof create>
export type SafeUpdate = z.output<typeof update>
export type SafePermissionIds = z.output<typeof permissionIds>
export type SafeMinumum = z.output<typeof minimum>;
export type SafeMinimumArray = z.output<typeof minimumList>
export type PaginatedMe = z.output<typeof paginatedMe>