import { z } from "zod";

export const me = z.object({
  id: z.string(),
  vehicleName: z.string().trim(),
  registrationNumber: z.string().trim().toUpperCase(),
  serviceRoutine: z.coerce.number(),
  operatedSince: z.coerce.number().min(2010),
  maxCapacity: z.coerce.number().min(2).max(15)
});

export const save = z.object({
  vehicleName: z.string().trim().nonempty('required'),
  registrationNumber: z.string().trim().nonempty('required').toUpperCase(),
  serviceRoutine: z.coerce.number('invalid'),
  operatedSince: z.coerce.number('invalid').min(2010, 'min'),
  maxCapacity: z.coerce.number('invalid').min(2, 'min').max(15, 'max')
});

export type SafeMe = z.infer<typeof me>;
export type SafeSave = z.output<typeof save>

