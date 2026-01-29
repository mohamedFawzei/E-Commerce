"use client";

import { SwiperProvider } from "./context/SwiperContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SwiperProvider>{children}</SwiperProvider>;
}
