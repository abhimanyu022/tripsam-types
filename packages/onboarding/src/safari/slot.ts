import { z } from "zod";

const TIME_12H = /^(0?[1-9]|1[0-2]):([0-5][0-9])(?:[\u00A0\u202F\s]*)?(AM|PM)$/i;

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

export const update = z.object({
  id: z.string().trim().optional(),
  name: z.string().trim().nonempty('required'),
  description: z.string().trim().optional(),
  startTime: time12h,
  endTime: time12h,
  minHour: z.coerce.number('invalid')
})

export const create = z.object({
  name: z.string().trim().nonempty('required'),
  description: z.string().trim().optional(),
  startTime: time12h,
  endTime: time12h,
  minHour: z.coerce.number('invalid')
})

export const me = z.object({
  id: z.string().trim(),
  name: z.string().trim().nonempty('required'),
  description: z.string().trim().optional(),
  startTime: z.coerce.number(),
  endTime: z.coerce.number(),
  minHour: z.coerce.number('invalid')
})

export const meList = z.array(me)

export type SafeMe = z.output<typeof me>;
export type SafeList = z.output<typeof meList>;
export type SafeCreate = z.output<typeof create>;
export type SafeUpdate = z.output<typeof update>;
