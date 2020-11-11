import { categoryById } from "../utils/categories";
import { CategoryBox } from "./category-box";
import Link from "next/link";
import { FC } from "react";

export const CommandView: FC<{
  title: string;
  command: string;
  categoryId?: number;
}> = ({ title, command, categoryId }) => {
  const category =
    categoryId !== undefined ? categoryById(categoryId) : undefined;

  return (
    <div className="p-4 border-gray-900 border-2 rounded-lg">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex justify-center pt-1 items-baseline">
          <div className="text-4xl bg-white text-black pl-3 pr-3 rounded-lg">
            {command}
          </div>
        </div>
        <div className="col-span-2 flex flex-col self-center">{title}</div>
      </div>
      {category && (
        <div className="flex justify-end pt-2">
          <Link href={`/categories/${category.id}`}>
            <a>
              <CategoryBox colorClass={category.colorClass} paddingClass="p-1">
                <div className="text-xs">{category.name}</div>
              </CategoryBox>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};
