// api/console/location/schema.ts
import { z } from "zod";

/**
 * q: free text (matches name, area, landmark labels, tag names)
 * lat/lng: optional; filter locations whose bounding box contains the point
 * limit: number of results
 */
export const SuggestLocation = z.object({
  q: z.string().trim().optional().default(""),
  lat: z.coerce.number().optional(),
  lng: z.coerce.number().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});

export type SanitizedSuggestLocation = z.infer<typeof SuggestLocation>;
