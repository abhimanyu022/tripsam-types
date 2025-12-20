import { z } from "zod";

// Canonical weekday enum
export const Weekday = z.enum([
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]);

export const get = z.object({
  id: z.string(),
  operationalDays: z
    .array(Weekday)
    .transform(arr => Array.from(new Set(arr))),
});

export const create = z.object({
  operationalDays: z
    .array(Weekday)
    .transform(arr => Array.from(new Set(arr))),
})

export const update = z.object({
  id: z.string().optional(),
  ...create.shape,
})

export type SafeGet = z.output<typeof get>;
export type SafeWeekdays = z.output<typeof Weekday>;
export type SafeCreate = z.output<typeof create>;
export type SafeUpdate = z.output<typeof update>;