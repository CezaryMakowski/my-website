import { z } from "zod";

export const sendData = z.object({
  email: z.string().email("niepoprawny email"),
  name: z
    .string()
    .max(20, "imię musi mieć maksymalnie 20 znaków")
    .min(1, "to pole jest wymagane"),
  message: z.string().min(1, "to pole jest wymagane"),
});

export type TsendData = z.infer<typeof sendData>;
