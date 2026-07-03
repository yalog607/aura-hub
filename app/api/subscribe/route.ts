import { NextResponse } from "next/server";

import { subscribeSchema } from "@/lib/validation";
import { sendSubscribeWebhook } from "@/lib/webhook";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = subscribeSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Dữ liệu không hợp lệ" },
      { status: 400 }
    );
  }

  const { delivered } = await sendSubscribeWebhook({ email: parsed.data.email });

  return NextResponse.json({ ok: true, delivered });
}
