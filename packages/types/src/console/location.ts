// api/console/location/schema.ts
import { z } from "zod";

/** ------- helpers ------- */
const DistanceInput = z.union([
  z.coerce.number().nonnegative(),
  z.string().trim().min(1), // allow "10 km", "15KM"
]);

/** ---------- Admin: Location (existing) ---------- */

export const GetLocation = z.object({
  q: z.string().trim().optional().default(''),
  kind: z.enum(['hotel','safari']).optional(),
  tagIds: z.array(z.string().uuid()).optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(10),
});

export const CreateLocation = z.object({
  name: z.string().trim().nonempty('required'),
  area: z.string().trim().nonempty('required'),
  kind: z.enum(['hotel','safari']),
  startLat: z.coerce.number(),
  startLng: z.coerce.number(),
  endLat: z.coerce.number(),
  endLng: z.coerce.number(),
  address: z.record(z.any(), z.object()).optional().default({}),
  metadata: z.record(z.any(), z.object()).optional().default({}),
  tagIds: z.array(z.string().uuid()).optional().default([]),
  // optional initial landmarks
  landmarks: z.array(z.object({
    label: z.string().trim().min(1, 'required'),
    distance: DistanceInput,      // km
    type: z.string().trim().optional(), // 'railway' | 'bus' | ...
    notes: z.string().trim().optional(),
  })).optional().default([]),
});

export const UpdateLocation = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().nonempty('required'),
  area: z.string().trim().nonempty('required'),
  kind: z.enum(['hotel','safari']),
  startLat: z.coerce.number(),
  startLng: z.coerce.number(),
  endLat: z.coerce.number(),
  endLng: z.coerce.number(),
  address: z.record(z.any(), z.object()).optional().default({}),
  metadata: z.record(z.any(), z.object()).optional().default({}),
});

/** ---------- Admin: Tag (existing) ---------- */

export const GetTag = z.object({
  q: z.string().trim().optional().default(''),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});
export const CreateTag = z.object({ name: z.string().trim().min(1, 'required') });
export const UpdateTag = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1, 'required'),
});
export const AssignTagsToLocation = z.object({
  tagIds: z.array(z.string().uuid()).nonempty('required'),
});

/** ---------- Admin: Landmarks ---------- */

export const CreateLandmark = z.object({
  label: z.string().trim().min(1, 'required'),
  distance: DistanceInput,               // "10 km" or 10
  type: z.string().trim().optional(),
  notes: z.string().trim().optional(),
});

export const UpdateLandmark = z.object({
  id: z.string().uuid().optional(),
  label: z.string().trim().min(1, 'required'),
  distance: DistanceInput,
  type: z.string().trim().optional(),
  notes: z.string().trim().optional(),
});

export const SetLandmarks = z.object({
  landmarks: z.array(CreateLandmark).default([]),
});

/** ---------- Public: Suggest (existing, now uses landmarks too) ---------- */

export const SuggestLocation = z.object({
  q: z.string().trim().optional().default(''),
  lat: z.coerce.number().optional(),
  lng: z.coerce.number().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});

export type SanitizedGetLocation = z.infer<typeof GetLocation>;
export type SanitizedCreateLocation = z.infer<typeof CreateLocation>;
export type SanitizedUpdateLocation = z.infer<typeof UpdateLocation>;
export type SanitizedGetTag = z.infer<typeof GetTag>;
export type SanitizedCreateTag = z.infer<typeof CreateTag>;
export type SanitizedUpdateTag = z.infer<typeof UpdateTag>;
export type SanitizedAssignTagsToLocation = z.infer<typeof AssignTagsToLocation>;
export type SanitizedCreateLandmark = z.infer<typeof CreateLandmark>;
export type SanitizedUpdateLandmark = z.infer<typeof UpdateLandmark>;
export type SanitizedSetLandmarks = z.infer<typeof SetLandmarks>;
export type SanitizedSuggestLocation = z.infer<typeof SuggestLocation>;

export const LocationSchema = z.object({
  id: z.string(),
  name: z.string(),
  area: z.string().nullable().optional(),
  kind: z.string(), // LocationKind enum on the backend; keep string in DTO for table
  startLat: z.string(),
  startLng: z.string(),
  endLat: z.string(),
  endLng: z.string(),
  address: z.any(),
  metadata: z.any(),
  tags: z.array(z.any()),
  landmarks: z.array(z.any())
})

export type LocationDTO = z.infer<typeof LocationSchema>

export const LocationListResponseSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
  total: z.number(),
  list: z.array(LocationSchema)
})

