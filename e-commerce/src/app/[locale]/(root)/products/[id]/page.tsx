import { getProductById } from "@/app/api/getProducts";
import ProductDetails from "@/features/products/components/ProductDetails";
import ProductTestimonials from "@/app/_components/product/ProductTestimonials";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  const response = await getProductById(id);

  if (!response?.data) {
    notFound();
  }

  const product = response.data;

  // Auth Logic
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  let user = null;

  if (token) {
    const decoded = verifyToken(token);
    if (decoded) {
      user = { name: decoded.name, id: decoded.id };
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <ProductDetails product={product} />
      <div className="mt-16">
        <ProductTestimonials productId={product.id} token={token} user={user} />
      </div>
    </div>
  );
}
