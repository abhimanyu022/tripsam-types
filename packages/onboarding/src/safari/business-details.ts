import { z } from "zod";

export const get = z.object({
  id: z.string(),
  bankAccountNumber: z.string().trim(),
  bankName: z.string().trim().toUpperCase(),
  accountHolderName: z.string().trim().toUpperCase(),
  bankIFSCCode: z.string().trim().toUpperCase(),
  adhaarNumber: z.string().trim(),
  GstNumber: z.string().trim().optional(),
  businessIdNumber: z.string().trim().optional(),
});

export const create = z.object({
  bankAccountNumber: z.string().trim().nonempty('required').min(9, 'min'),
  bankName: z.string().trim().toUpperCase().nonempty('required').min(3, 'min'),
  accountHolderName: z.string().trim().toUpperCase().nonempty('required'),
  bankIFSCCode: z.string().trim().toUpperCase().min(7, 'min').nonempty('required'),
  adhaarNumber: z.string().trim().nonempty('required').min(12, 'min'),
  GstNumber: z.string().trim().optional().default(''),
  businessIdNumber: z.string().trim().optional().default(''),
});

export const update = z.object({
  ...create.shape,
  id: z.string().optional().default(''),
});

export type SafeGet = z.infer<typeof get>;
export type SafeCreate = z.output<typeof create>
export type SafeUpdate = z.output<typeof update>
