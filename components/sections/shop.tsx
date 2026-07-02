"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { WishlistButton } from "@/components/cart/wishlist-button";
import { formatPrice, PRODUCTS } from "@/lib/products";
import { useStore } from "@/lib/store";

export function Shop() {
  const addToCart = useStore((state) => state.addToCart);
  const addRecentlyViewed = useStore((state) => state.addRecentlyViewed);

  return (
    <section id="shop" className="border-b border-border/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Cửa hàng
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Trang bị AURA Hub cho ngôi nhà của bạn
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Bắt đầu với trung tâm điều khiển AURA Hub, mở rộng thêm cảm biến
            và thiết bị theo nhu cầu.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onViewportEnter={() => addRecentlyViewed(product.id)}
              className="flex flex-col rounded-3xl border border-border/60 bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <product.icon className="size-5" />
                </span>
                <WishlistButton productId={product.id} productName={product.name} />
              </div>

              <h3 className="mt-4 text-base font-semibold">{product.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>

              {product.colors && (
                <ColorPicker productId={product.id} colors={product.colors} />
              )}

              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
                <Button
                  size="sm"
                  onClick={() => {
                    addToCart(product.id);
                    toast(`Đã thêm ${product.name} vào giỏ hàng`);
                  }}
                >
                  Thêm vào giỏ
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ColorPicker({ colors }: { productId: string; colors: string[] }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mt-3 flex items-center gap-2">
      {colors.map((color, index) => (
        <button
          key={color}
          type="button"
          title={color}
          aria-label={color}
          aria-pressed={selected === index}
          onClick={() => setSelected(index)}
          className={`size-5 rounded-full border-2 transition-all ${
            selected === index ? "border-primary" : "border-transparent"
          }`}
          style={{
            backgroundColor: ["#f5f2ea", "#4b4f52", "#5c6d55"][index % 3],
          }}
        />
      ))}
    </div>
  );
}
