import z from "zod";

export const safariType = z.enum([
  "LEOPARD_SAFARI",
  "TIGER_SAFARI",
  "LION_SAFARI",
  "BIRD_WATCHING_SAFARI",
  "JUNGLE_SAFARI",
  "VILLAGE_SAFARI",
]);

export const paymentType =
  z.enum([
    "FULL_PAYMENT",
    "PAY_TO_VENDOR",
  ] as const);

export const createBooking = z.object({
  safariId: z.string().min(1),
  slotId: z.string().min(1),
  bookingDate: z.string().refine((s) => !Number.isNaN(Date.parse(s)), "invalid ISO date"),
  numberOfAdults: z.coerce.number().int().min(1),
  numberOfKids: z.coerce.number().int().min(0).default(0),
  numberOfInfants: z.coerce.number().int().min(0).default(0),
  totalPrice: z.coerce.number().int().min(0),
  discount: z.coerce.number().int().min(0).default(0),
  finalPrice: z.coerce.number().int().min(0),
  commission: z.coerce.number().int().min(0),
  safariType: safariType.default("LEOPARD_SAFARI"),
  paymentType: paymentType.default("FULL_PAYMENT"),
  postPaymentCharge: z.coerce.number().int().min(0).default(0),
  paytoVendorAmount: z.coerce.number().int().min(0).default(0),
});

export type SafeCreateBooking = z.output<typeof createBooking>;
