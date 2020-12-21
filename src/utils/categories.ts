import { categories, Category } from "../data/categories";

export const categoryById = (id: string): Category | undefined =>
  categories[id];
