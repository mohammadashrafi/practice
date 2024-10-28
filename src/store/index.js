import { create } from "zustand";
import { createJSONStorage, devtools,persist } from "zustand/middleware";
export const useStoreProducts = create(
  devtools(
    persist(
        
      (set, get) => ({
        products: [],
        addToCard: (products) => {

          const cart = get().products;
          const cartItem = cart.find((item) => item.id === products.id);
          if (!cartItem) {
            set((state) => ({
              products: [...state.products, products],
            }));
          }
        },
        removeFromCard: (productsid) =>
          set((state) => ({
            products: state.products.filter((prod) => prod.id !== productsid),
          })),
        clearCart: () => set({ products: [] }),
      }),
      { name: "products",storage: createJSONStorage(() => localStorage), }
    )
  )
);
