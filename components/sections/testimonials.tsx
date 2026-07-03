"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Minh Anh",
    role: "Chủ nhà tại TP. Thủ Đức",
    quote:
      "Từ khi lắp AURA Hub, con tôi ít bị dị ứng hô hấp hẳn. Ứng dụng cảnh báo chất lượng không khí rất kịp thời mỗi khi trời ô nhiễm.",
    rating: 5,
  },
  {
    name: "Gia Huy",
    role: "Kỹ sư phần mềm, Hà Nội",
    quote:
      "Thiết lập chỉ mất 5 phút, tương thích tốt với các thiết bị Matter tôi đang dùng. Giao diện đơn giản mà vẫn đủ mạnh cho người thích tinh chỉnh.",
    rating: 5,
  },
  {
    name: "Thu Trang",
    role: "Mẹ bỉm sữa, Đà Nẵng",
    quote:
      "Thích nhất tính năng tự động điều chỉnh độ ẩm phòng bé theo giờ ngủ. Cảm giác an tâm hơn hẳn khi theo dõi được môi trường sống của cả nhà.",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-border/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Khách hàng nói gì
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Được tin dùng bởi những gia đình yêu sức khỏe
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col rounded-3xl border border-border/60 bg-card p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${
                      i < testimonial.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-muted-foreground">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
