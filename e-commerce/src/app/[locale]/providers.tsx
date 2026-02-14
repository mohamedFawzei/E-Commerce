import { SwiperProvider } from "@/app/context/SwiperContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        <SwiperProvider>{children}</SwiperProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
