import z from "zod";

export const createTicket = z.object({
  email: z.string().email('invalid'),
  type: z.enum(['SAFARI', 'HOTEL'], 'invalid'),
  category: z.string().trim().nonempty('required').min(3, 'min').max(100, 'max'),
  subcategory: z.string().trim().nonempty('required').min(3, 'min').max(100, 'max'),
  message: z.string().trim().nonempty('required').min(10, 'min').max(1000, 'max'),
});

export type SafeCreateTicket = z.output<typeof createTicket>;