import { apiClient } from "@/services/api/client";
import { CategoriesResponse, SubCategoriesResponse, Category } from "../types";

export const categoryService = {
  getAll: async (): Promise<Category[]> => {
    const response = await apiClient.get<CategoriesResponse>("/categories");
    return response.data;
  },

  getAllSubCategories: async (): Promise<SubCategoriesResponse["data"]> => {
    const response =
      await apiClient.get<SubCategoriesResponse>("/subcategories");
    return response.data;
  },

  getWithSubCategories: async (): Promise<Category[]> => {
    // Parallel fetch for efficiency
    const [categories, subCategories] = await Promise.all([
      categoryService.getAll(),
      categoryService.getAllSubCategories(),
    ]);

    // Merge logic
    return categories.map((cat) => ({
      ...cat,
      subcategories: subCategories.filter((sub) => sub.category === cat._id),
    }));
  },
};
