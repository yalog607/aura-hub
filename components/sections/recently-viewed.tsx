"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice, getProduct } from "@/lib/products";
import { useHasHydrated, useStore } from "@/lib/store";

export function RecentlyViewed() {
  const hasHydrated = useHasHydrated();
  const recentlyViewed = useStore((state) => state.recentlyViewed);

  if (!hasHydrated) {
    return (
      <section className="border-b border-border/60 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-5 w-48" />
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-28 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const products = recentlyViewed
    .map((id) => getProduct(id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  if (products.length === 0) return null;

  return (
    <section className="border-b border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-semibold text-muted-foreground">
          Sản phẩm đã xem gần đây
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-3"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <product.icon className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{product.name}</p>
                <p className="text-xs text-muted-foreground">{formatPrice(product.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
