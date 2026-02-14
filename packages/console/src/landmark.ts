import { z } from "zod";

export const locationType = z.enum([
  "RAILWAY_STATION",
  "BUS_STAND",
  "AIRPORT",
  "RESTAURANTS",
  "ATTRACTIONS"
]);

export const create = z.object({
  label: z.string().trim().min(1, 'required'),
  distance: z.coerce.number().nonnegative('invalid'),
  type: locationType.default("RAILWAY_STATION"),
  notes: z.string().trim().optional(),
});

export const update = z.object({
  id: z.string().uuid().optional(),
  label: z.string().trim().min(1, 'required'),
  distance: z.coerce.number().nonnegative('invalid'),
  type: z.string().trim().optional(),
  notes: z.string().trim().optional(),
});

export type SafeCreate = z.infer<typeof create>;
export type SafeUpdate = z.infer<typeof update>;