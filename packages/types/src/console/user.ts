import { z } from "zod";

export const getUser = z.object({
  q: z.string().trim().optional().default(''),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(10),
});

export const createUser = z.object({
  email: z.string().nonempty('required').email('invalid'),
  fullName: z.string().trim().nonempty('required'),
  countryCode: z.string().trim().optional().default('+91'),
  phone: z.string().trim().optional().default(''),
});

export const updateUser = z.object({
  assignedRoles: z.array(z.string()),
});

export type SanitizedGetUser = z.infer<typeof getUser>
export type SanitizedCreateUser = z.infer<typeof createUser>
export type SanitizedUpdateUser = z.infer<typeof updateUser>


export type AssignedRole = {
  id: string;
  name: string;
}

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  fullName: z.string().optional().default(''),
  phoneNumber: z.string().nullable().optional().default(''),
  isSystem: z.boolean(),
  assignedRoles: z.array(z.object({ id: z.string(), name: z.string() })),
  isActive: z.boolean(),
});

export const UserListResponseSchema = z.object({
  list: z.array(UserSchema),
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
});

export type UserDTO = z.infer<typeof UserSchema>;
export type UsersListResponse = z.infer<typeof UserListResponseSchema>;


