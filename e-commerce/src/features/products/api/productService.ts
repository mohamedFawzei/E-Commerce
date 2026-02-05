import { apiClient } from "@/services/api/client";
import { ProductsResponse, Product } from "@/types/product";

export const productService = {
  getAll: async (): Promise<Product[]> => {
    const response = await apiClient.get<ProductsResponse>("/products");
    return response.data;
  },

  getById: async (id: string): Promise<Product> => {
    const response = await apiClient.get<{ data: Product }>(`/products/${id}`);
    return response.data;
  },
};
