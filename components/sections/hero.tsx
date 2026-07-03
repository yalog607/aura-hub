"use client";

import Link from "next/link";
import { ArrowRight, Battery, ShieldCheck, Wind } from "lucide-react";

import { Button } from "@/components/ui/button";
import { trackClick } from "@/lib/analytics";

const STATS = [
  { label: "Thiết bị tương thích", value: "50+" },
  { label: "Thời lượng pin dự phòng", value: "30 ngày" },
  { label: "Giám sát không khí", value: "24/7" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[36rem] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-15"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            AURA Hub · Smart Home cho lối sống lành mạnh
          </span>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Ngôi nhà của bạn,{" "}
            <span className="text-primary">thở đều theo nhịp sống khoẻ</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            AURA Hub theo dõi chất lượng không khí, tự động hoá thói quen sinh
            hoạt và bảo vệ ngôi nhà của bạn theo thời gian thực — tất cả trong
            một trung tâm điều khiển duy nhất.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="#shop" />}
              onClick={() => trackClick("hero_preorder")}
            >
              Đặt trước ngay
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="#features" />}
              onClick={() => trackClick("hero_explore_features")}
            >
              Khám phá tính năng
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 text-xl font-semibold sm:text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-in fade-in zoom-in-95 duration-700 delay-150">
          <div className="relative mx-auto flex aspect-square max-w-sm items-center justify-center">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,_var(--color-primary)_0deg,_var(--color-chart-2)_120deg,_var(--color-primary)_360deg)] opacity-20 blur-2xl"
            />

            <div className="relative flex aspect-square w-72 flex-col justify-between rounded-[2.5rem] border border-border/60 bg-card/90 p-6 shadow-2xl shadow-primary/10 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">AURA Hub</span>
                <span className="flex size-2.5 rounded-full bg-primary" />
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">Chỉ số không khí</p>
                <p className="text-5xl font-semibold text-primary">32</p>
                <p className="text-xs text-muted-foreground">Tốt · Trong lành</p>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>22°C</span>
                <span>Độ ẩm 48%</span>
              </div>
            </div>

            <div className="absolute -left-6 top-6 flex items-center gap-2 rounded-2xl border border-border/60 bg-card/95 px-3 py-2 text-xs font-medium shadow-lg backdrop-blur">
              <Wind className="size-4 text-primary" />
              Không khí trong lành
            </div>

            <div className="absolute -right-4 bottom-10 flex items-center gap-2 rounded-2xl border border-border/60 bg-card/95 px-3 py-2 text-xs font-medium shadow-lg backdrop-blur">
              <ShieldCheck className="size-4 text-primary" />
              An ninh chủ động
            </div>

            <div className="absolute bottom-0 left-4 flex items-center gap-2 rounded-2xl border border-border/60 bg-card/95 px-3 py-2 text-xs font-medium shadow-lg backdrop-blur">
              <Battery className="size-4 text-primary" />
              30 ngày pin
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
