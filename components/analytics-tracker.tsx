"use client";

import { useScrollDepthTracking } from "@/lib/analytics";

export function AnalyticsTracker() {
  useScrollDepthTracking();
  return null;
}
