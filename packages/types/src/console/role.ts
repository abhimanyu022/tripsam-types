import { z } from "zod";

export const GetRole = z.object({
  q: z.string().trim().optional().default(''),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(10),
});

export const CreateRole = z.object({
  name: z.string().trim().nonempty('required'),
  description: z.string().trim().optional().default(''),
});

export const UpdateRole = z.object({
  id: z.string().trim().optional(),
  name: z.string().trim().nonempty('required'),
  description: z.string().trim().optional().default(''),
  permissions: z.array(z.string()),
});

export const assignPermissionsToRole = z.object({
  permissions: z.array(z.string().uuid()).nonempty('required'),
});

export type SanitizedGetRole = z.infer<typeof GetRole>
export type SanitizedCreateRole = z.infer<typeof CreateRole>
export type SanitizedUpdateRole = z.infer<typeof UpdateRole>
export type SanitizedAssignPermissionsToRole = z.infer<typeof assignPermissionsToRole>

export const RoleSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable().optional(),
  isSystem: z.boolean(),
  version: z.number(),
  permissions: z.array(z.string()),
  updatedAt: z.string().refine((s) => !Number.isNaN(Date.parse(s)), "invalid ISO date"),
  isActive: z.boolean(),
});

export const RolesListResponseSchema = z.object({
  list: z.array(RoleSchema),
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
});


export const RoleMinimum = z.object({
  id: z.string(),
  name: z.string(),
});
export const RolesListMinimum = z.object({
  list: z.array(RoleMinimum) 
});

export type RoleDTO = z.infer<typeof RoleSchema>;
export type RolesListResponse = z.infer<typeof RolesListResponseSchema>;

export type RoleMinimum = z.infer<typeof RoleMinimum>;
export type RoleListMinimum = z.infer<typeof RolesListMinimum>;
