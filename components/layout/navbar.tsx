"use client";

import * as React from "react";
import Link from "next/link";
import { Heart, Leaf, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useHasHydrated, useStore } from "@/lib/store";

const NAV_LINKS = [
  { label: "Tính năng", href: "#features" },
  { label: "Thông số", href: "#specs" },
  { label: "Cửa hàng", href: "#shop" },
  { label: "Liên hệ", href: "#newsletter" },
];

export function Navbar() {
  const hasHydrated = useHasHydrated();
  const wishlistCount = useStore((state) => state.wishlist.length);
  const count = hasHydrated ? wishlistCount : 0;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="size-4" />
          </span>
          <span className="text-lg">AURA Hub</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Sản phẩm yêu thích"
            className="relative"
            render={<Link href="#shop" />}
            nativeButton={false}
          >
            <Heart className="size-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {count}
              </span>
            )}
          </Button>
          <CartDrawer />
          <ThemeToggle />

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Mở menu" className="md:hidden" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Leaf className="size-3.5" />
                  </span>
                  AURA Hub
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <a
                        href={link.href}
                        className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
