import { Product } from "@/types/product";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RelatedProducts from "./RelatedProducts";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  if (!product) return null;

  return (
    <div>
      <Breadcrumbs
        items={[
          {
            label: product.category.name,
            href: isNaN(Number(product.category._id))
              ? undefined
              : `/products?category=${product.category._id}`,
          },
          { label: product.category.name },
          { label: product.title },
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/*  Gallery */}
        <div className="w-full">
          <div className="sticky top-24">
            <ProductGallery images={product.images} title={product.title} />
          </div>
        </div>

        {/*  Info */}
        <div className="w-full">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        categoryId={product.category._id}
        currentProductId={product._id || product.id || ""}
      />
    </div>
  );
}
