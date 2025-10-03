import { z } from "zod";

export const GetUsers = z.object({
  q: z.string().trim().optional().default(''),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(10),
});

export type SanitizedGetRole = z.infer<typeof GetUsers>

export const CustomerUserSchema = z.object({
  email: z.string(),
  countryCode: z.string().optional().default('+91'),
  fullName: z.string().optional().default(''),
  phone: z.string().optional().default(''),
  provider: z.string(),
  updatedAt: z.string().refine((s) => !Number.isNaN(Date.parse(s)), "invalid ISO date"),
});

export const CustomerUserListResponseSchema = z.object({
  list: z.array(CustomerUserSchema),
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
});

export type CustomerUserDTO = z.infer<typeof CustomerUserSchema>;
export type CustomerUsersListResponse = z.infer<typeof CustomerUserListResponseSchema>;