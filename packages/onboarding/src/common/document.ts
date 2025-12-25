import z, { url } from "zod";

export const SafariDocuments = z.enum(
  ['aadhaar_front',
    'aadhaar_back',
    'driving_license_front',
    'driving_license_back',
    'vehicle_rc',
    'pan_card']);

export type SafeSafariDocuments = z.infer<typeof SafariDocuments>;

export const get = z.object({
  id: z.string(),
  type: SafariDocuments,
  url: z.string()
});

export type SafeGet = z.infer<typeof get>;