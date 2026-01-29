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

export const onboard = z.object({
  id: z.string(),
  status: z.enum(['pending', 'in_review', 'approved', 'rejected', 'completed']),
  remark: z.string().optional().default(''),
  type: safeSas,
  currentStep: z.string().default('1.0'),
})

export const onboardUser = z.object({
  id: z.string(),
  email: z.string(),
  countryCode: z.string().default('+91'),
  phone: z.string().nullable().default(null),
  isPhoneVerified: z.boolean().default(false),
  fullName: z.string().nullable().default(null),
});

export const updateUser = z.object({
  fullName: z.string().trim().nonempty('required').min(2, 'min').max(50, 'max'),
  countryCode: z.string().trim().min(2, 'min').max(5, 'max').default('+91'),
  phone: z.string().trim().nonempty('required').min(10, 'min').max(15, 'max'),
});

export const list = z.array(onboard);

export type SafeOnboard = z.output<typeof onboard>
export type SafeOnboardList = z.output<typeof list>
export type SafeUpdateUser = z.output<typeof updateUser>
export type SafeOnboardUser = z.output<typeof onboardUser>
export type SafariType = keyof typeof safariTypes;
