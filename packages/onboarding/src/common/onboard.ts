import { z } from "zod";

export const onboard = z.object({
  id: z.string(),
  status: z.enum(['pending', 'in_review', 'approved', 'rejected', 'completed']),
  remark: z.string().optional().default(''),
  currentStep: z.number().default(1),
})

export type SafeOnboard = z.output<typeof onboard>
