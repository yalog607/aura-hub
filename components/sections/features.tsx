"use client";

import { m } from "framer-motion";
import {
  BatteryCharging,
  Layers,
  Mic,
  ShieldCheck,
  Sparkles,
  Wind,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  highlight?: boolean;
};

const FEATURES: Feature[] = [
  {
    icon: Wind,
    title: "Giám sát chất lượng không khí",
    description:
      "Cảm biến đo bụi mịn PM2.5, CO2 và độ ẩm theo thời gian thực, cảnh báo ngay khi không khí trong nhà xuống dưới ngưỡng an toàn.",
    className: "sm:col-span-2 sm:row-span-2",
    highlight: true,
  },
  {
    icon: Sparkles,
    title: "Tự động hoá thói quen",
    description:
      "Thiết lập kịch bản theo giờ giấc sinh hoạt: ánh sáng, nhiệt độ và không khí tự điều chỉnh theo thói quen sống lành mạnh của bạn.",
  },
  {
    icon: ShieldCheck,
    title: "An ninh chủ động 24/7",
    description:
      "Phát hiện bất thường và gửi cảnh báo tức thì tới điện thoại, kết nối trực tiếp với camera và cảm biến cửa trong nhà.",
  },
  {
    icon: Mic,
    title: "Điều khiển giọng nói",
    description: "Ra lệnh rảnh tay cho mọi thiết bị trong nhà chỉ bằng giọng nói tự nhiên.",
  },
  {
    icon: BatteryCharging,
    title: "Tiết kiệm năng lượng",
    description: "Tự động tắt thiết bị không dùng đến, tối ưu điện năng theo thói quen sử dụng.",
  },
  {
    icon: Layers,
    title: "Tương thích đa nền tảng",
    description: "Hoạt động mượt với Matter, Zigbee và WiFi 6 — kết nối mọi thiết bị hiện có.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Tính năng nổi bật
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Mọi thứ ngôi nhà khoẻ mạnh cần, trong một trung tâm điều khiển
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AURA Hub kết hợp cảm biến môi trường, tự động hoá và an ninh thông
            minh để chăm sóc sức khỏe cho cả gia đình bạn.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-[repeat(3,minmax(0,auto))] lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <m.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-colors hover:border-primary/40",
                feature.className
              )}
            >
              {feature.highlight && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-80"
                />
              )}

              <div className="relative flex h-full flex-col">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <feature.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
