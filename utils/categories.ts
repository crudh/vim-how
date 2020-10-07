import { categories, Category } from "../data/categories";

export const categoriesList = Object.values(categories);

export const categoryById = (id: number): Category => categories[id];
