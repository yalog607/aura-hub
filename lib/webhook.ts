type DiscordEmbedField = {
  name: string;
  value: string;
  inline?: boolean;
};

type DiscordEmbed = {
  title: string;
  color: number;
  fields: DiscordEmbedField[];
  timestamp: string;
};

const AURA_GREEN = 0x2f9e6f;

async function postToWebhook(envVar: string, url: string | undefined, embed: DiscordEmbed) {
  if (!url) {
    console.warn(`[webhook] ${envVar} is not set — skipping delivery.`, embed.title);
    return { delivered: false as const };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!response.ok) {
      console.error("[webhook] delivery failed", response.status, await response.text());
      return { delivered: false as const };
    }

    return { delivered: true as const };
  } catch (error) {
    console.error("[webhook] delivery error", error);
    return { delivered: false as const };
  }
}

export function sendSubscribeWebhook(data: { email: string }) {
  return postToWebhook("SUBSCRIBE_WEBHOOK_URL", process.env.SUBSCRIBE_WEBHOOK_URL, {
    title: "📬 Đăng ký nhận tin mới — AURA Hub",
    color: AURA_GREEN,
    fields: [{ name: "Email", value: data.email, inline: false }],
    timestamp: new Date().toISOString(),
  });
}

export function sendTrackWebhook(data: {
  event: string;
  label: string;
  path: string;
}) {
  return postToWebhook("TRACK_WEBHOOK_URL", process.env.TRACK_WEBHOOK_URL, {
    title: "📈 Sự kiện hành vi người dùng — AURA Hub",
    color: AURA_GREEN,
    fields: [
      { name: "Sự kiện", value: data.event, inline: true },
      { name: "Chi tiết", value: data.label, inline: true },
      { name: "Trang", value: data.path, inline: false },
    ],
    timestamp: new Date().toISOString(),
  });
}
