import { z } from "zod";

export const languageKnownEnum = z.enum(['english', 'hindi', 'gujarati', 'marathi']);

export const get = z.object({
  id: z.string(),
  driverName: z.string().trim(),
  drivingLicenseNumber: z.string().trim().toUpperCase(),
  experience: z.coerce.number(),
  dlUploadedImg1: z.string().trim().nullable(),
  dlUploadedImg2: z.string().trim().nullable(),
  languagesKnown: z.array(languageKnownEnum)
});

export const save = z.object({
  driverName: z.string().trim().min(2, 'min').max(50, 'max').nonempty('required'),
  drivingLicenseNumber: z.string().trim().nonempty('required').min(6, 'min').max(20, 'max').toUpperCase(),
  experience: z.coerce.number().min(1, 'min').max(30, 'max').default(1),
  languagesKnown: z.array(languageKnownEnum).nonempty('required').refine(
    (langs) => langs.every(lang => languageKnownEnum.options.includes(lang)),
    { message: 'invalid' }
  )
});

export const getList = z.array(get)

export type SafeGet = z.infer<typeof get>;
export type SafeSave = z.output<typeof save>
export type SafeList = z.output<typeof getList>

