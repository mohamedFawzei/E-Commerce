"use client";

import Image from "next/image";
import StarRating from "@/components/common/StarRating";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer flex flex-col overflow-hidden h-full">
      {/* Image & Button Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-square bg-gray-50">
        <div className="relative w-full h-full p-4">
          <Image
            width={500}
            height={500}
            loading="lazy"
            src={product.imageCover}
            alt={product.title || "product"}
            className="object-contain object-center w-full h-full transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
          />
        </div>

        {/* Add To Cart Button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <button className="w-full bg-black text-white py-3 font-medium hover:bg-zinc-800 transition-colors cursor-pointer rounded-b-2xl">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 px-1 mt-3">
        <h3
          className="text-lg font-bold text-black line-clamp-1 text-left"
          title={product.title}
        >
          {product.title?.split(" ").slice(0, 4).join(" ") || "Product Title"}
        </h3>

        <div className="flex items-center justify-between gap-3 text-md">
          <span className="text-red-500 font-bold">
            {product.price ? `${product.price} EGP` : "$0"}
          </span>
          <div className="flex items-center gap-1">
            <StarRating
              rating={product.ratingsAverage ?? 4.5}
              count={product.ratingsQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
