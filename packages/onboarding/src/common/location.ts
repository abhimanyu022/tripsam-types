import z from "zod";

export const locationDetails = z.object({
  id: z.string(),
  name: z.string(),
  area: z.string(),
  startLat: z.coerce.number(),
  startLng: z.coerce.number(),
  endLat: z.coerce.number(),
  endLng: z.coerce.number(),
  address: z.object({
    city: z.string(),
    state: z.string(),
  }),
  metadata: z.object(),
  landmarks: z.array(z.object({
    id: z.string(),
    label: z.string(),
    type: z.string().optional().default(''),
    distanceKm: z.coerce.number()
  }))
})

export const autocompleteRequest = z.object({
  q: z.string().trim().optional().default(""),
  lat: z.coerce.number().optional(),
  lng: z.coerce.number().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});

export const autocompleteResponse = z.array(locationDetails)

export type SafeLocation = z.output<typeof locationDetails>;
export type SafeLocationResponse = z.output<typeof autocompleteResponse>;
export type SafeAutoCompleteRequest = z.output<typeof autocompleteRequest>;