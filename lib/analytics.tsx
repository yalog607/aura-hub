"use client";

import { useEffect } from "react";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

function sendTrack(event: "scroll_depth" | "click", label: string) {
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, label, path: window.location.pathname }),
    keepalive: true,
  }).catch(() => {});
}

export function trackClick(label: string) {
  sendTrack("click", label);
}

function showNewsletterNudge() {
  toast("Ưu đãi ra mắt đang chờ bạn!", {
    id: "newsletter-nudge",
    icon: <Sparkles className="size-4 text-primary" />,
    description: "Đăng ký nhận tin để không bỏ lỡ ưu đãi sớm từ AURA Hub.",
    duration: 8000,
    action: {
      label: "Đăng ký ngay",
      onClick: () => {
        trackClick("newsletter_nudge_cta");
        document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" });
        document.getElementById("newsletter-email")?.focus();
      },
    },
  });
}

const SCROLL_THRESHOLDS = [25, 50, 75, 100];

export function useScrollDepthTracking() {
  useEffect(() => {
    const reached = new Set<number>();
    let ticking = false;

    function evaluate() {
      ticking = false;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((window.scrollY / docHeight) * 100);

      for (const threshold of SCROLL_THRESHOLDS) {
        if (percent >= threshold && !reached.has(threshold)) {
          reached.add(threshold);
          sendTrack("scroll_depth", `${threshold}%`);

          if (threshold === 75) {
            showNewsletterNudge();
          }
        }
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(evaluate);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
