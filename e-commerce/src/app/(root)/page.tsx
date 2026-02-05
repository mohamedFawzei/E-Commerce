import MySwiper from "../_components/swiper/MySwiper";
import ProductShowcase from "@/features/products/components/ProductShowcase";
import FeaturedCategories from "@/features/categories/components/FeaturedCategories";
import DepartmentSection from "@/features/categories/components/DepartmentSection";
import { categoryService } from "@/features/categories/api/categoryService";
import { productService } from "@/features/products/api/productService";

export default async function Home() {
  const productsData = productService.getAll();
  const categoriesData = categoryService.getWithSubCategories();

  // Parallel data fetching
  const [products, categoriesWithSubs] = await Promise.all([
    productsData,
    categoriesData,
  ]);

  return (
    <section className="container mx-auto">
      <MySwiper />
      {/* Featured Categories (Circular) */}
      <FeaturedCategories categories={categoriesWithSubs} />
      {/* Products Showcase */}
      <ProductShowcase products={products} />
      {/* Featured Departments */}
      {categoriesWithSubs.length > 2 && (
        <DepartmentSection category={categoriesWithSubs[2]} />
      )}
    </section>
  );
}
