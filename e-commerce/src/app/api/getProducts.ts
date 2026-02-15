"use server";
import { api } from "./api";

export async function getProducts(params?: {
  categoryId?: string;
  subCategoryId?: string;
  keyword?: string;
  limit?: number;
}) {
  const baseUrl = params?.keyword ? process.env.API_V2_URL : api;
  let url = `${baseUrl}/products`;
  const queryParams = new URLSearchParams();

  if (params?.keyword) {
    queryParams.append("keyword", params.keyword);
  }

  if (params?.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  if (params?.subCategoryId) {
    queryParams.append("subcategory", params.subCategoryId);
  } else if (params?.categoryId) {
    queryParams.append("category", params.categoryId);
  }

  const queryString = queryParams.toString();
  if (queryString) {
    url += `?${queryString}`;
  }

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      console.error(
        `Failed to fetch products: ${res.status} ${res.statusText} at ${url}`,
      );
      return { data: [] };
    }
    const data = await res.json();
  //console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { data: [] };
  }
}

export async function getProductById(id: string) {
  const url = `${api}/products/${id}`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      console.error(
        `Failed to fetch product ${id}: ${res.status} ${res.statusText} at ${url}`,
      );
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

export async function getProductsByBrand(brandId: string) {
  const url = `${api}/products?brand=${brandId}`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      console.error(
        `Failed to fetch products for brand ${brandId}: ${res.status} ${res.statusText} at ${url}`,
      );
      return { data: [] };
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching products for brand ${brandId}:`, error);
    return { data: [] };
  }
}
