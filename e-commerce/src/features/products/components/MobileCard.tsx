import Image from "next/image";
import { Product } from "@/types/product";
import StarRating from "@/components/common/StarRating";

interface MobileCardProps {
  product: Product;
}

export default function MobileCard({ product }: MobileCardProps) {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex flex-col gap-2 h-full">
      <div className="relative aspect-3/4 w-full rounded-md overflow-hidden bg-gray-50">
        <Image
          src={product.imageCover}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-contain mix-blend-multiply"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-red-500 font-bold text-sm">
            {product.price} EGP
          </span>
          <div className="scale-75 origin-right">
            <StarRating rating={product.ratingsAverage} />
          </div>
        </div>
        <button className="w-full mt-auto bg-black cursor-pointer text-white text-xs py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
          Add
        </button>
      </div>
    </div>
  );
}
