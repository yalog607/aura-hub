"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { HeartPulse, Home, Sparkles, Wifi, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    icon: Wifi,
    title: "Kết nối thiết bị",
    description:
      "Kết nối AURA Hub với các thiết bị sẵn có trong nhà chỉ trong vài phút qua ứng dụng di động — không cần thợ lắp đặt.",
  },
  {
    icon: Sparkles,
    title: "Thiết lập thói quen",
    description:
      "Tạo kịch bản tự động theo giờ giấc sinh hoạt: ánh sáng dịu buổi tối, không khí trong lành lúc thức dậy.",
  },
  {
    icon: HeartPulse,
    title: "Theo dõi sức khỏe & môi trường",
    description:
      "Nhận cảnh báo tức thời về chất lượng không khí, nhiệt độ và độ ẩm ngay trên điện thoại của bạn.",
  },
  {
    icon: Home,
    title: "Tận hưởng không gian sống",
    description:
      "Ngôi nhà tự vận hành theo thói quen của bạn — bạn chỉ cần tận hưởng không gian sống trong lành và an toàn.",
  },
];

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const coreRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const coreScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="border-b border-border/60 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Hành trình sử dụng
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Từ lúc mở hộp đến một ngôi nhà tự vận hành
          </h2>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start">
          <div className="relative md:sticky md:top-24 md:self-start">
            <div className="relative mx-auto flex aspect-square max-w-sm items-center justify-center overflow-hidden rounded-[2.5rem] border border-border/60 bg-card">
              <m.div
                aria-hidden
                style={{ y: blobY1 }}
                className="absolute -left-10 -top-10 size-40 rounded-full bg-primary/20 blur-2xl"
              />
              <m.div
                aria-hidden
                style={{ y: blobY2 }}
                className="absolute -right-10 -bottom-10 size-48 rounded-full bg-chart-2/20 blur-2xl"
              />

              <m.div
                style={{ rotate: coreRotate, scale: coreScale }}
                className="relative flex size-40 items-center justify-center rounded-full border border-primary/30 bg-primary/10"
              >
                <Home className="size-14 text-primary" />
              </m.div>
            </div>

            <div className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-2">
              {STEPS.map((step, index) => {
                const start = index / STEPS.length;
                const end = (index + 1) / STEPS.length;
                return (
                  <ProgressDot
                    key={step.title}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </div>
          </div>

          <ol className="space-y-8">
            {STEPS.map((step, index) => (
              <m.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-4 rounded-3xl border border-border/60 bg-card p-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Bước {index + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </m.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProgressDot({
  progress,
  start,
  end,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const width = useTransform(progress, [start, end], ["0%", "100%"]);

  return (
    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
      <m.span
        style={{ width }}
        className={cn("block h-full rounded-full bg-primary")}
      />
    </span>
  );
}
