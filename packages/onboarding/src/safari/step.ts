import { z } from "zod";

export const steps = z.enum(['basic_info', 'location']);

export const me = z.object({
  email: z.string(),
  name: z.string().trim().optional().default(''),
  countryCode: z.string().optional().default('+91'),
  phoneNumber: z.string().optional().default(''),
  isPhoneVerified: z.boolean().optional().default(false),
  type: z.string().optional().default(''),
  status: z.enum(['pending', 'in_review', 'approved', 'rejected']).optional().default('pending'),
  currentStep: steps,
  remarks: z.string().optional().default('')
});

export type SafeMe = z.infer<typeof me>;

