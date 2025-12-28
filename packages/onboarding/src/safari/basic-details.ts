import { z } from "zod";

export const safariTypes = {
  leopard_safari: "leopardSafari",
  tiger_safari: "tigerSafari",
  bird_watching: "birdWatching",
  village_safari: "villageSafari",
  lion_safari: "lionSafari",
  jungle_safari: "jungleSafari",
  other: "other",
} as const;

export const safeSas = z.enum(Object.keys(safariTypes) as Array<keyof typeof safariTypes>);

export type SafariType = keyof typeof safariTypes;
export const get = z.object({
  id: z.string(),
  name: z.string().trim().optional().default(''),
  countryCode: z.string().optional().default('+91'),
  phone: z.string().optional().default(''),
  isPhoneVerified: z.boolean().optional().default(false),
  type: safeSas
});

export const create = z.object({
  name: z.string().trim().nonempty('required').min(2, 'min').max(50, 'max'),
  countryCode: z.string().trim().min(2, 'min').max(5, 'max').default('+91'),
  phone: z.string().trim().nonempty('required').min(5, 'min').max(15, 'max'),
  type: z.enum(Object.keys(safariTypes) as Array<keyof typeof safariTypes>, 'invalid'),
});

export const update = z.object({
  ...create.shape,
  id: z.string().optional().default(''),
});

export type SafeGet = z.infer<typeof get>;
export type SafeUpdate = z.output<typeof update>
export type SafeCreate = z.output<typeof create>

export const defaultBasicDetails: SafeGet = {
  id: '',
  name: '',
  countryCode: '+91',
  phone: '',
  isPhoneVerified: false,
  type: 'leopard_safari',
}

