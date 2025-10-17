import { z } from "zod";

export const suggest = z.object({
  q: z.string().trim().optional().default(""),
  lat: z.coerce.number().optional(),
  lng: z.coerce.number().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});

export const minimum = z.object({
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

export const pickupLandmark = z.object({
  id: z.string().optional(),
  label: z.string(),
  type: z.string().optional(),
  distanceKm: z.coerce.number(),
})

export const save = z.object({
  locationId: z.string().trim().nonempty('required'),
  safariLocation: z.string().trim().nonempty('required'),
  pickupLocation: z.string().trim().nonempty('required'),
  pickupLandmarks: z.array(pickupLandmark)
})

export const me = z.object({
  location: minimum,
  safariLocation: z.string(),
  pickupLocation: z.string(),
  pickupLandmarks: z.array(pickupLandmark),
  completed: z.boolean()
})

export const minimumList = z.array(minimum)

export type SafeMinimum = z.output<typeof minimum>;
export type SafeMinimumList = z.output<typeof minimum>;
export type SafeSuggest = z.output<typeof suggest>;
export type SafeSave = z.output<typeof save>;
export type SafeMe = z.output<typeof me>;
export type SafePickupLandmark = z.output<typeof pickupLandmark>;
