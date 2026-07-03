"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trackClick } from "@/lib/analytics";
import { subscribeSchema, type SubscribeInput } from "@/lib/validation";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubscribeInput>({
    resolver: zodResolver(subscribeSchema),
  });

  async function onSubmit(data: SubscribeInput) {
    trackClick("newsletter_submit");

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      toast.error(body?.error ?? "Có lỗi xảy ra, vui lòng thử lại.");
      return;
    }

    setSubmitted(true);
    toast("Cảm ơn bạn đã đăng ký nhận tin!");
    reset();
  }

  return (
    <section id="newsletter" className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-3xl border border-border/60 bg-card p-8 text-center sm:p-12">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Đăng ký nhận tin
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Nhận tin tức và ưu đãi sớm nhất từ AURA Hub
          </h2>
          <p className="mt-3 text-muted-foreground">
            Đăng ký để không bỏ lỡ ưu đãi ra mắt và mẹo chăm sóc ngôi nhà khoẻ mạnh.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 text-left sm:flex-row sm:items-start"
          >
            <div className="flex-1">
              <Label htmlFor="newsletter-email" className="sr-only">
                Email
              </Label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="ban@email.com"
                aria-invalid={Boolean(errors.email)}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
            <Button type="submit" disabled={isSubmitting} className="sm:mt-0">
              {isSubmitting ? "Đang gửi..." : "Đăng ký"}
            </Button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-primary">
              Đã đăng ký thành công — hẹn gặp bạn trong email tiếp theo!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
