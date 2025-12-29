import { z } from "zod";

export const get = z.object({
  id: z.string(),
  bankAccountNumber: z.string().trim(),
  bankName: z.string().trim().toUpperCase(),
  accountHolderName: z.string().trim().toUpperCase(),
  bankIFSCCode: z.string().trim().toUpperCase(),
  adhaarNumber: z.string().trim(),
  gstNumber: z.string().trim().optional(),
  businessIdNumber: z.string().trim().optional(),
});

export const create = z.object({
  bankAccountNumber: z.string().trim().nonempty('required').min(6, 'min').max(20, 'max'),
  accountHolderName: z.string().trim().nonempty('required').min(2, 'min').max(50, 'max').toUpperCase(),
  bankName: z.string().trim().toUpperCase().nonempty('required').min(3, 'min').max(50, 'max'),
  bankIFSCCode: z.string().trim().nonempty('required').min(7, 'min').max(11, 'max').toUpperCase(),
  adhaarNumber: z.string().trim().nonempty('required').min(12, 'min').max(20, 'max'),
  gstNumber: z.string().trim().min(8, 'min').max(20, 'max').optional().or(z.literal('')),
  businessIdNumber: z.string().trim().min(8, 'min').max(20, 'max').optional().or(z.literal(''))
});

export const update = z.object({
  ...create.shape,
  id: z.string().optional().default(''),
});

export type SafeGet = z.infer<typeof get>;
export type SafeCreate = z.output<typeof create>
export type SafeUpdate = z.output<typeof update>
