import { z } from "zod";

export const languageKnownEnum = z.enum(['english', 'hindi', 'gujarati', 'marathi']);

export const get = z.object({
  id: z.string(),
  driverName: z.string().trim(),
  drivingLicenseNumber: z.string().trim().toUpperCase(),
  experience: z.coerce.number(),
  languagesKnown: z.array(languageKnownEnum)
});

export const save = z.object({
  driverName: z.string().trim().nonempty('required'),
  drivingLicenseNumber: z.string().trim().nonempty('required').toUpperCase(),
  experience: z.coerce.number().min(1, 'min'),
  languagesKnown: z.array(languageKnownEnum)
});

export const getList = z.array(get)

export type SafeGet = z.infer<typeof get>;
export type SafeSave = z.output<typeof save>
export type SafeList = z.output<typeof getList>

