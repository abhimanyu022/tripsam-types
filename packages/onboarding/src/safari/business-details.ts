import { z } from "zod";

export const me = z.object({
  bankAccountNumber: z.string().trim(),
  bankName: z.string().trim(),
  accountHolderName: z.string().trim(),
  gstNumber: z.string().trim().optional(),
  businessNumber: z.string().trim().optional(),
  ifscCode: z.string().trim()
});

export const create = z.object({
  bankAccountNumber: z.string().trim().nonempty('required'),
  bankName: z.string().trim().nonempty('required'),
  accountHolderName: z.string().trim().nonempty('required'),
  ifscCode: z.string().trim().nonempty('required'),
  gstNumber: z.string().trim().optional(),
  businessNumber: z.string().trim().optional()
});

export type SafeMe = z.infer<typeof me>;
export type SafeCreate = z.output<typeof create>

