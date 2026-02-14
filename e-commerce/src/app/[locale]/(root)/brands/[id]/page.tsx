import React from "react";
import { getBrandById } from "@/app/api/getBrands";
import { getProductsByBrand, getProducts } from "@/app/api/getProducts";
import { Product } from "@/types/product";
import BrandClientPage from "@/features/brands/components/BrandClientPage";

import { notFound } from "next/navigation";

// ... existing imports

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const brand = await getBrandById(id);
  if (!brand?.data) return { title: "Brand Not Found" };
  return {
    title: `${brand.data.name} | Brands`,
    description: `Shop products from ${brand.data.name}`,
  };
}

export default async function BrandDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [brandData, brandProductsData, allProductsData] = await Promise.all([
    getBrandById(id),
    getProductsByBrand(id),
    getProducts(),
  ]);

  if (!brandData?.data) {
    notFound();
  }

  const brand = brandData.data;
  const brandProducts: Product[] = brandProductsData.data;
  const allProducts: Product[] = allProductsData.data;

  return (
    <BrandClientPage
      brand={brand}
      brandProducts={brandProducts}
      allProducts={allProducts}
    />
  );
}
