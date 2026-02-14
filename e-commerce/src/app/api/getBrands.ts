"use server";
import { api } from "./api";

export async function getBrands() {
  const res = await fetch(`${api}/brands`);
  if (!res.ok) {
    throw new Error("Failed to fetch brands");
  }
  const data = await res.json();
  return data;
}

export async function getBrandById(id: string) {
  const res = await fetch(`${api}/brands/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch brand with id: ${id}`);
  }
  const data = await res.json();
  return data;
}
