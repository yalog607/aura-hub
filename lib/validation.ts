import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().trim().min(1, "Vui lòng nhập email").email("Email không hợp lệ"),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;

export const trackSchema = z.object({
  event: z.enum(["scroll_depth", "click"]),
  label: z.string().min(1).max(120),
  path: z.string().min(1).max(200),
});

export type TrackInput = z.infer<typeof trackSchema>;
