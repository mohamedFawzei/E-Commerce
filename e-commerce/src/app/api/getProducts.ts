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

  const res = await fetch(url);
  const data = await res.json();
  //console.log(data);

  return data;
}

export async function getProductById(id: string) {
  const res = await fetch(`${api}/products/${id}`);
  const data = await res.json();
  return data;
}

export async function getProductsByBrand(brandId: string) {
  const res = await fetch(`${api}/products?brand=${brandId}`);
  const data = await res.json();
  return data;
}
