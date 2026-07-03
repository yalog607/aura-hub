import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().trim().min(1, "Vui lòng nhập email").email("Email không hợp lệ"),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;
