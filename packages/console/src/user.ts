import { z } from "zod";

export const create = z.object({
  email: z.email('invalid').nonempty('required'),
  fullName: z.string().trim().nonempty('required'),
  countryCode: z.string().trim().optional().default('+91'),
  phone: z.string().trim().optional().default(''),
});

export const update = z.object({
  roleIds: z.array(z.string()),
});

export const me = z.object({
  id: z.string(),
  email: z.string(),
  fullName: z.string().optional().default(''),
  phoneNumber: z.string().nullable().optional().default(''),
  isSystem: z.boolean(),
  assignedRoles: z.array(z.object({ id: z.string(), name: z.string() })),
  isActive: z.boolean(),
});

export const paginatedMe = z.object({
  list: z.array(me),
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
});

export type SafeMe = z.infer<typeof me>;
export type SafePaginatedMe = z.infer<typeof paginatedMe>;
export type SafeCreate = z.output<typeof create>
export type SafeUpdate= z.output<typeof update>