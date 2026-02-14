"use client";

import Image from "next/image";
import StarRating from "@/components/common/StarRating";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("ProductCard");
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  return (
    <div className="group relative  rounded-2xl flex flex-col h-full bg-white  overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-gray-100 ">
      {/* Image Container */}
      <div className="relative h-[300px]! w-full bg-gray-50 overflow-hidden">
        <Link
          href={`/products/${product._id || product.id}`}
          className="block w-full h-full"
        >
          <Image
            width={500}
            height={625}
            loading="lazy"
            src={product.imageCover}
            alt={product.title || "product"}
            className="object-cover w-full h-full! text-transparent transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Actions Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={() => {
              const id = product._id || product.id;
              if (id) addToCart(id);
            }}
            className="w-full py-3 cursor-pointer bg-white/90 backdrop-blur-sm text-black font-semibold text-sm rounded-lg shadow-lg hover:bg-black hover:text-white transition-colors duration-200 border border-black/5"
          >
            {t("addToCart")}
          </button>
        </div>

        {/* Badge*/}
        <div
          className={`absolute top-3 start-3 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide ${
            product.priceAfterDiscount ? "bg-red-500" : " "
          }`}
        >
          {product.priceAfterDiscount ? t("sale") : " "}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-3 end-3 p-2 rounded-full bg-white/80 backdrop-blur-xs hover:bg-white shadow-sm transition-all duration-200 z-10 group/wishlist"
          title={
            isInWishlist(product._id || product.id!)
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          <Heart
            size={18}
            className={`transition-colors duration-200 ${
              isInWishlist(product._id || product.id!)
                ? "fill-red-500 text-red-500"
                : "text-gray-400 group-hover/wishlist:text-red-500"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Category */}
        {product.category?.name && (
          <p className="text-xs text-gray-500 mb-1 font-medium tracking-wide">
            {product.category.name}
          </p>
        )}

        <Link href={`/products/${product._id || product.id}`}>
          <h3
            className="text-base font-semibold text-gray-900 line-clamp-2 leading-tight mb-2 group-hover:text-black transition-colors"
            title={product.title}
          >
            {product.title}
          </h3>
        </Link>
        <div className="mt-auto flex flex-col items-start md:items-end md:flex-row justify-between gap-1 border-t border-gray-50 pt-3">
          {product.priceAfterDiscount ? (
            <div className="flex flex-col items-start gap-1">
              <span className="text-sm text-gray-400 line-through whitespace-nowrap">
                {product.price?.toLocaleString()} {t("currency")}
              </span>{" "}
              <span className="text-lg font-bold text-red-600 whitespace-nowrap">
                {product.priceAfterDiscount.toLocaleString()} {t("currency")}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
              {product.price?.toLocaleString()} {t("currency")}
            </span>
          )}
          <div className="flex items-center gap-1 mb-1">
            <div className="text-yellow-400 text-sm">
              <StarRating rating={product.ratingsAverage} />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {product.ratingsAverage}
            </span>
            <span className="text-xs text-gray-400">
              ({product.ratingsQuantity})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
