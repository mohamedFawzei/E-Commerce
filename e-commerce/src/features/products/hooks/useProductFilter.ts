import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useProductFilter = (defaultCategory: string = "All") => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get active category from URL or default
  const activeCategory = searchParams.get("category") || defaultCategory;

  // Function to update URL without reload
  const setCategory = useCallback(
    (category: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (category && category !== "All") {
        params.set("category", category);
      } else {
        params.delete("category");
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  return { activeCategory, setCategory };
};
