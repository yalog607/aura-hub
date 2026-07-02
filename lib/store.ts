import * as React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  productId: string;
  quantity: number;
};

type StoreState = {
  cart: CartItem[];
  wishlist: string[];
  recentlyViewed: string[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  addRecentlyViewed: (productId: string) => void;
};

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],
      recentlyViewed: [],

      addToCart: (productId) =>
        set((state) => {
          const existing = state.cart.find((item) => item.productId === productId);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.productId === productId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { productId, quantity: 1 }] };
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.productId !== productId),
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return { cart: state.cart.filter((item) => item.productId !== productId) };
          }
          return {
            cart: state.cart.map((item) =>
              item.productId === productId ? { ...item, quantity } : item
            ),
          };
        }),

      toggleWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist.filter((id) => id !== productId)
            : [...state.wishlist, productId],
        })),

      addRecentlyViewed: (productId) =>
        set((state) => ({
          recentlyViewed: [
            productId,
            ...state.recentlyViewed.filter((id) => id !== productId),
          ].slice(0, 4),
        })),
    }),
    { name: "aura-hub-store", skipHydration: true }
  )
);

let hydrated = false;
const hydrationListeners = new Set<() => void>();

function subscribeHydration(listener: () => void) {
  hydrationListeners.add(listener);
  return () => hydrationListeners.delete(listener);
}

/** True only after the persisted store has rehydrated on the client, avoiding SSR/client mismatches. */
export function useHasHydrated() {
  return React.useSyncExternalStore(
    subscribeHydration,
    () => hydrated,
    () => false
  );
}

if (typeof window !== "undefined") {
  useStore.persist.onFinishHydration(() => {
    hydrated = true;
    hydrationListeners.forEach((listener) => listener());
  });
  useStore.persist.rehydrate();
}
