// api/console/location/schema.ts
import { z } from "zod";

/**
 * q: free text (matches name, area, landmark labels, tag names)
 * lat/lng: optional; filter locations whose bounding box contains the point
 * limit: number of results
 */
export const suggest = z.object({
  q: z.string().trim().optional().default(""),
  lat: z.coerce.number().optional(),
  lng: z.coerce.number().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});

export type SafeSuggest = z.output<typeof suggest>;
