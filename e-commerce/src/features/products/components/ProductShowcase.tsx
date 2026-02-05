"use client";
import { useState, useMemo } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowSize } from "@/app/_hooks/useWindowSize";
import MobileCard from "./MobileCard";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { useProductFilter } from "../hooks/useProductFilter";

interface ProductShowcaseProps {
  products: Product[];
}

export default function ProductShowcase({
  products = [],
}: ProductShowcaseProps) {
  const { activeCategory, setCategory } = useProductFilter("All");
  const [isAnimating, setIsAnimating] = useState(false);
  const { isMobile } = useWindowSize();

  // 1. Extract unique categories dynamically
  const categories = useMemo(() => {
    if (!products) return ["All"];
    const cats = products
      .map((p) => p.category?.name)
      .filter((name): name is string => !!name);
    return ["All", ...Array.from(new Set(cats))];
  }, [products]);

  // 2. Filter products based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category?.name === activeCategory);
  }, [products, activeCategory]);

  // 3. Handle Category Click with Animation
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCategory(category);
      setIsAnimating(false);
    }, 300);
  };

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="w-full px-2 py-8">
      <h2 className="text-3xl md:text-4xl tracking-wider font-semibold text-black my-4 px-2">
        Explore Our Products
      </h2>
      {/* Filter Bar */}
      <div
        className={`${
          isMobile
            ? "flex flex-nowrap overflow-x-scroll w-full gap-3 px-4 py-3 -mx-2 no-scrollbar scroll-smooth items-center"
            : "flex flex-wrap justify-center md:justify-start items-center gap-4 my-5"
        }`}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer shrink-0 ${
              isMobile ? "px-2 py-1" : "px-6 py-2.5"
            } ${
              activeCategory === category
                ? "bg-black text-white border-black shadow-lg scale-105"
                : "bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Display */}
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        {filteredProducts.length > 0 ? (
          <>
            {isMobile ? (
              // Mobile View
              <div className="grid grid-cols-2 gap-3 pb-8">
                {filteredProducts.map((product) => (
                  <MobileCard
                    key={product._id || product.id || Math.random()}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              // Desktop View
              <Swiper
                key={activeCategory}
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {filteredProducts.map((product) => (
                  <SwiperSlide
                    key={product._id || product.id || Math.random()}
                    className="h-[400px]! bg-white!"
                  >
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h3 className="text-xl font-bold text-gray-400">
              No products found in this category.
            </h3>
            <button
              onClick={() => handleCategoryChange("All")}
              className="mt-4 text-blue-600 hover:underline cursor-pointer font-medium"
            >
              View all products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
