"use client";

import { Heart } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useHasHydrated, useStore } from "@/lib/store";

export function WishlistButton({
  productId,
  productName,
}: {
  productId: string;
  productName: string;
}) {
  const hasHydrated = useHasHydrated();
  const isWishlisted = useStore((state) => state.wishlist.includes(productId));
  const toggleWishlist = useStore((state) => state.toggleWishlist);

  const active = hasHydrated && isWishlisted;

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={active ? "Bỏ khỏi yêu thích" : "Thêm vào yêu thích"}
      aria-pressed={active}
      onClick={() => {
        toggleWishlist(productId);
        toast(
          active
            ? `Đã bỏ ${productName} khỏi yêu thích`
            : `Đã thêm ${productName} vào yêu thích`
        );
      }}
    >
      <Heart className={cn("size-4", active && "fill-primary text-primary")} />
    </Button>
  );
}
