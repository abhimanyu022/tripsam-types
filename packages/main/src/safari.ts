import z from "zod";

const decimalLike = z.custom<{ toString(): string }>();
const decimalish = z.union([z.number(), z.string(), decimalLike]);

export const safariSearchSchema = z.object({
  locationId: z.string().optional(),
  adults: z.coerce.number().min(1).default(2),
  kids: z.coerce.number().min(0).default(1),
  infants: z.coerce.number().min(0).default(0),
  date: z.string().optional().default(''),
  safariTypes: z.string().optional().default(''),
  priceMin: z.coerce.number().min(0).default(0),
  priceMax: z.coerce.number().min(0).default(0),
});

export const safariVehicle = z.object({
  name: z.string(),
  rcNumber: z.string(),
  capacity: z.number().int().positive(),
  operationalSince: z.string(),
});

export const safariSlot = z.object({
  id: z.string(),
  name: z.string(),
  startTime: z.number(),
  endTime: z.number()
});

export const landmark = z.object({
  name: z.string(),
  type: z.string(),
})

export const location = z.object({
  id: z.string(),
  name: z.string(),
  area: z.string(),
  address: z.string(),
  startLat: decimalish,
  startLng: decimalish,
  endLat: decimalish,
  endLng: decimalish,
  landmark: z.array(landmark)
});

export const pickupPoint = z.object({
  id: z.string(),
  label: z.string(),
  type: z.string(),
  distanceKm: decimalish,
});

export const safariDetails = z.object({
  id: z.string(),
  safariCode: z.string(),
  vehicles: z.array(safariVehicle),
  slots: z.array(safariSlot),
  rate: decimalish,
  discount: decimalish,
  rating: z.coerce.number().min(0).max(5).default(0),
  reviewCount: z.coerce.number().int().min(0).default(0),
  operationalDays: z.array(z.number().int().min(0).max(6)),
  location: location,
  pickupLocation: z.string(),
  safariLocation: z.string(),
  pickupPoints: z.array(pickupPoint),
  safariType: z.array(z.string()),
  reviews: z.array(z.object({
    id: z.string(),
    rating: z.coerce.number().min(1).max(5),
    review: z.string().default(''),
    author: z.string().default('Guest'),
    date: z.string(),
  })).default([]),
  description: z.string().optional(),
});

export type SafariDetails = z.infer<typeof safariDetails>;
export type SafariSearch = z.infer<typeof safariSearchSchema>;
