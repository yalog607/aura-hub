"use client";

import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatPrice, getProduct } from "@/lib/products";
import { useHasHydrated, useStore } from "@/lib/store";

export function CartDrawer() {
  const hasHydrated = useHasHydrated();
  const cart = useStore((state) => state.cart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);

  const items = hasHydrated
    ? cart
        .map((item) => ({ item, product: getProduct(item.productId) }))
        .filter((entry): entry is { item: typeof entry.item; product: NonNullable<typeof entry.product> } =>
          Boolean(entry.product)
        )
    : [];

  const total = items.reduce(
    (sum, { item, product }) => sum + item.quantity * product.price,
    0
  );
  const count = hasHydrated ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Giỏ hàng"
            className="relative"
          />
        }
      >
        <ShoppingCart className="size-5" />
        {count > 0 && (
          <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            {count}
          </span>
        )}
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Giỏ hàng của bạn</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4">
          {items.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              Giỏ hàng đang trống.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map(({ item, product }) => (
                <li
                  key={item.productId}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 p-3"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <product.icon className="size-4" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatPrice(product.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon-sm"
                        aria-label="Giảm số lượng"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      >
                        <Minus className="size-3" />
                      </Button>
                      <span className="w-5 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon-sm"
                        aria-label="Tăng số lượng"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      >
                        <Plus className="size-3" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Xoá khỏi giỏ hàng"
                    onClick={() => removeFromCart(item.productId)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border/60 p-4">
          <div className="flex items-center justify-between text-sm font-medium">
            <span>Tổng cộng</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Button className="mt-3 w-full" disabled={items.length === 0}>
            Tiến hành đặt hàng
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
