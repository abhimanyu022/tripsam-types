import z from "zod";

export const safariSearchSchema = z.object({
  locationId: z.string().optional(),
  adults: z.coerce.number().min(1).default(2),
  kids: z.coerce.number().min(0).default(1),
  infants: z.coerce.number().min(0).default(0),
  date: z.string().optional().default(''),
});

export type SafariSearch = z.infer<typeof safariSearchSchema>;