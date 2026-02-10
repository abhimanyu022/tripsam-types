import z from "zod";

export const SafariDocuments = z.enum(
  ['aadhaar_front',
    'aadhaar_back',
    'driving_license_front',
    'driving_license_back',
    'vehicle_rc',
    'pan_card',
    'safari_photo_main',
    'safari_photo_1',
    'safari_photo_2',
    'safari_photo_3',
    'safari_photo_4',
  ] as const
);

export type SafeSafariDocuments = z.infer<typeof SafariDocuments>;

export const get = z.object({
  id: z.string(),
  type: SafariDocuments,
  url: z.string()
});

export type SafeGet = z.infer<typeof get>;