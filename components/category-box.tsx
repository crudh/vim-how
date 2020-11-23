import { FC } from "react";
import { Category } from "../data/categories";

export const CategoryBox: FC<{
  category: Category;
  small?: boolean;
}> = ({ category, small = false, children }) => {
  const paddingClass = small ? "p-1" : "p-4";

  return (
    <div
      className={`${category.colorClass} ${paddingClass} flex flex-col items-center rounded-lg`}
    >
      {children}
    </div>
  );
};
