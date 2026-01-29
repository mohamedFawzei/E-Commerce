"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getProducts } from "../api/getProducts";

interface Product {
  _id: string;
  title: string;
  imageCover: string;
  images?: string[];
  price?: number;
  ratingsAverage?: number;
  [key: string]: any;
}

interface SwiperContextType {
  products: Product[];
  loading: boolean;
}

const SwiperContext = createContext<SwiperContextType | undefined>(undefined);

export function SwiperProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        // Adjust based on actual API response structure.
        // Based on page.tsx: const { data } = await getProducts();
        // So response likely has a 'data' property which is the array.
        if (response && response.data) {
          setProducts(response.data);
        } else if (Array.isArray(response)) {
          setProducts(response);
        }
      } catch (error) {
        console.error("Failed to fetch products for swiper:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <SwiperContext.Provider value={{ products, loading }}>
      {children}
    </SwiperContext.Provider>
  );
}

export function useSwiperContext() {
  const context = useContext(SwiperContext);
  if (context === undefined) {
    throw new Error("useSwiperContext must be used within a SwiperProvider");
  }
  return context;
}
