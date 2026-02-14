"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  getWishlist,
  addToWishlist as apiAddToWishlist,
  removeFromWishlist as apiRemoveFromWishlist,
} from "@/services/api/wishlist";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

interface WishlistContextType {
  wishlistItems: string[];
  wishlistProducts: Product[]; 
  count: number;
  loading: boolean;
  isInWishlist: (productId: string) => boolean;
  addToWishlist: (product: Product) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
  toggleWishlist: (product: Product) => Promise<void>;
  updateWishlist: () => Promise<void>;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const updateWishlist = async () => {
    try {
      setLoading(true);
      const res = await getWishlist();
      if (res?.status === "success" || res?.data) {
        setWishlistProducts(res.data);
        setWishlistItems(res.data.map((p) => p._id || p.id!));
        setCount(res.count || res.data.length);
      } else {
        setWishlistItems([]);
        setWishlistProducts([]);
        setCount(0);
      }
    } catch (error) {
      //   console.error("Failed to update wishlist", error);
    
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = async (product: Product) => {
    const productId = product._id || product.id!;

    const previousItems = [...wishlistItems];
    setWishlistItems((prev) => [...prev, productId]);
    setCount((prev) => prev + 1);

    try {
      const res = await apiAddToWishlist(productId);
      if (res?.status === "success") {
        toast.success("Added to wishlist");
        
        await updateWishlist();
      } else {
        if (
          res?.message === "No token found" ||
          (res as any)?.message === "fail"
        ) {
          toast.error("Please login first");
          
          setWishlistItems(previousItems);
          setCount(previousItems.length);
          router.push("/login");
        } else {
          throw new Error(res?.message || "Failed to add");
        }
      }
    } catch (error) {
      toast.error("Failed to add to wishlist");
      setWishlistItems(previousItems);
      setCount(previousItems.length);
    }
  };

  const removeFromWishlist = async (productId: string) => {
    const previousItems = [...wishlistItems];
    setWishlistItems((prev) => prev.filter((id) => id !== productId));
    setCount((prev) => prev - 1);
    setWishlistProducts((prev) =>
      prev.filter((p) => (p._id || p.id) !== productId),
    );

    try {
      const res = await apiRemoveFromWishlist(productId);
      if (res?.status === "success") {
        toast.success("Removed from wishlist");
        await updateWishlist();
      } else {
        throw new Error(res?.message || "Failed to remove");
      }
    } catch (error) {
      toast.error("Failed to remove from wishlist");
      setWishlistItems(previousItems);
      setCount(previousItems.length);
      await updateWishlist();
    }
  };

  const toggleWishlist = async (product: Product) => {
    const productId = product._id || product.id!;
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
    } else {
      await addToWishlist(product);
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.includes(productId);
  };

  useEffect(() => {
    updateWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistProducts,
        count,
        loading,
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        updateWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
