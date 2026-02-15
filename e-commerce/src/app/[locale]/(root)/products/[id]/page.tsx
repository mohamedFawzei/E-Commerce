import { getProductById, getProducts } from "@/app/api/getProducts";
import ProductDetails from "@/features/products/components/ProductDetails";
import ProductTestimonials from "@/app/_components/product/ProductTestimonials";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
};

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    if (!products?.data || !Array.isArray(products.data)) return [];

    return products.data.map((product: any) => ({
      id: product._id || product.id,
    }));
  } catch (error) {
    console.error("Error generating static params for products:", error);
    return [];
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  try {
    // 1. Safe Data Fetching
    const response = await getProductById(id);

    // 2. Check Valid API Response
    if (!response || !response.data) {
      notFound();
    }

    const product = response.data;

    if (!product) {
      notFound();
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    let user = null;

    if (token) {
      try {
        const decoded = verifyToken(token);
        if (decoded) {
          user = { name: decoded.name, id: decoded.id };
        }
      } catch (error) {
        console.error("Auth token verification failed:", error);
      }
    }

    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <ProductDetails product={product} />
        <div className="mt-16">
          <ProductTestimonials
            productId={product.id || product._id}
            token={token}
            user={user}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Page Error [products/${id}]:`, error);
    notFound();
  }
}
