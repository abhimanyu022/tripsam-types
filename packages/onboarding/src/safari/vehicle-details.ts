import { z } from "zod";

export const get = z.object({
  id: z.string(),
  vehicleName: z.string().trim(),
  registrationId: z.string().trim().toUpperCase(),
  serviceRoutineInDays: z.coerce.number(),
  operationalSince: z.coerce.number().min(2010),
  maxCapacity: z.coerce.number().min(2).max(15)
});

export const save = z.object({
  vehicleName: z.string().trim().nonempty('required'),
  registrationId: z.string().trim().nonempty('required').toUpperCase(),
  serviceRoutineInDays: z.coerce.number('invalid'),
  operationalSince: z.coerce.number('invalid').min(2010, 'min'),
  maxCapacity: z.coerce.number('invalid').min(2, 'min').max(15, 'max')
});

export const list = z.array(get)

export type SafeGet = z.infer<typeof get>;
export type SafeSave = z.output<typeof save>
export type SafeList = z.output<typeof list>;


