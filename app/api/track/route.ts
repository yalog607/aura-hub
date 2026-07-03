import { NextResponse } from "next/server";

import { trackSchema } from "@/lib/validation";
import { sendTrackWebhook } from "@/lib/webhook";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = trackSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }

  // Fire-and-forget: don't block the response on webhook delivery.
  void sendTrackWebhook(parsed.data);

  return NextResponse.json({ ok: true });
}
