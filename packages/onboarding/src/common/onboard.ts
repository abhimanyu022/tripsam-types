import { z } from "zod";

export const onboard = z.object({
  id: z.string(),
  status: z.enum(['pending', 'in_review', 'approved', 'rejected', 'completed']),
  remark: z.string().optional().default(''),
  currentStep: z.string().default('1.0'),
})

export type SafeOnboard = z.output<typeof onboard>
