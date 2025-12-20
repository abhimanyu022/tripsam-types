import { z } from "zod";
import { SafeLocation, locationDetails } from "../common/location";

export const pickupLandmark = z.object({
  id: z.string().optional(),
  label: z.string(),
  type: z.string().optional(),
  distanceKm: z.coerce.number(),
})

export const get = z.object({
  id: z.string(),
  location: locationDetails,
  safariLocation: z.string(),
  pickupLocation: z.string(),
  pickupLandmarks: z.array(pickupLandmark),
})

export const create = z.object({
  locationId: z.string().trim().nonempty('required'),
  safariLocation: z.string().trim().nonempty('required'),
  pickupLocation: z.string().trim().nonempty('required'),
  pickupLandmarks: z.array(pickupLandmark)
})

export const update = z.object({
  id: z.string().optional().default(''),
  ...create.shape,
})

export type SafeGet = z.output<typeof get>;
export type SafeCreate = z.output<typeof create>;
export type SafeUpdate = z.output<typeof update>;
export type SafePickupLandmark = z.output<typeof pickupLandmark>;

export const defaultLocation: SafeGet = {
  id: '',
  location: null as unknown as SafeLocation,
  safariLocation: '',
  pickupLocation: '',
  pickupLandmarks: [],
}

