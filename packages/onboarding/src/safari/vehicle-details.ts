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
  vehicleName: z.string().trim().nonempty('required').min(2, 'min').max(50, 'max'),
  registrationId: z.string().trim().nonempty('required').min(1, 'min').max(25, 'max').toUpperCase(),
  serviceRoutineInDays: z.coerce.number('numberOnly').min(1, 'minNumber').max(60, 'maxNumber'),
  operationalSince: z.coerce.number('numberOnly').min(2010, 'minNumber').max(new Date().getFullYear(), 'maxNumber'),
  maxCapacity: z.coerce.number('numberOnly').min(2, 'minNumber').max(15, 'maxNumber')
});

export const list = z.array(get)

export type SafeGet = z.infer<typeof get>;
export type SafeSave = z.output<typeof save>
export type SafeList = z.output<typeof list>;


