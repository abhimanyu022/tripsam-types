import { z } from "zod";

const TIME_12H = /^(0?[1-9]|1[0-2]):([0-5][0-9])(?:[\u00A0\u202F\s]*)?(AM|PM)$/i;
const TIME_24H = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;

export const time12h = z
  .string()
  .trim()
  .regex(TIME_12H, "Use format hh:mm AM/PM")
  .transform((v) => {
    const m = v.match(TIME_12H)!;
    const hh = m[1];           // hour (1–12, leading 0 optional)
    const mm = m[2];           // minutes
    const meridian = m[3].toUpperCase(); // AM/PM
    let h = parseInt(hh, 10) % 12; // 12 -> 0
    if (meridian === "PM") h += 12;
    return h * 60 + parseInt(mm, 10); // minutes since midnight
  });

export const time24h = z
  .string()
  .trim()
  .regex(TIME_24H, "invalid")
  .transform((v) => {
    const m = v.match(TIME_24H)!;
    const hh = parseInt(m[1], 10); // hour (0-23)
    const mm = parseInt(m[2], 10); // minutes
    return hh * 60 + mm; // minutes since midnight
  });

export const create = z.object({
  name: z.string().trim().nonempty('required'),
  description: z.string().trim().min(3, 'min').max(200, 'max').optional().or(z.literal('')),
  startTime: z.coerce.number().min(0, 'invalid').max(1439, 'invalid'),
  endTime: z.coerce.number().min(0, 'invalid').max(1439, 'invalid'),
  minHour: z.coerce.number().min(1, 'minNumber').max(24, 'maxNumber').optional().default(3)
})

export const update = z.object({
  id: z.string().trim().optional(),
  ...create.shape,
})

export const remove = z.object({
  id: z.string().trim()
})

export const get = z.object({
  id: z.string().trim(),
  name: z.string().trim().nonempty('required'),
  description: z.string().trim().optional(),
  startTime: z.coerce.number(),
  endTime: z.coerce.number(),
  minHour: z.coerce.number('invalid')
})

export const list = z.array(get)

export type SafeGet = z.output<typeof get>;
export type SafeList = z.output<typeof list>;
export type SafeCreate = z.output<typeof create>;
export type SafeUpdate = z.output<typeof update>;
export type SafeRemove = z.output<typeof remove>;
