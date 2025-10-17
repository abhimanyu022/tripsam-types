import { z } from "zod";

// 1) Canonical weekday enum
export const Weekday = z.enum([
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]);

export const me = z.object({
  operationalDays: z
    .array(Weekday)
    .transform(arr => Array.from(new Set(arr))),
});

export type SafeMe = z.output<typeof me>;
export type SafeWeekdays = z.output<typeof Weekday>;

