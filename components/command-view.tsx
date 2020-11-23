import { categoryById } from "../utils/categories";
import { CategoryBox } from "./category-box";
import Link from "next/link";
import { FC } from "react";
import { Command } from "../data/commands";

export const CommandView: FC<{
  command: Command;
  showCategory?: boolean;
}> = ({ command, showCategory = false }) => {
  const category = showCategory ? categoryById(command.categoryId) : undefined;

  return (
    <div className="p-4 border-gray-900 border-2 rounded-lg">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex justify-center pt-1 items-baseline">
          <div className="text-4xl bg-white text-black pl-3 pr-3 rounded-lg">
            {command.command}
          </div>
        </div>
        <div className="col-span-2 flex flex-col self-center">
          {command.title}
        </div>
      </div>
      {category && (
        <div className="flex justify-end pt-2">
          <Link href={`/categories/${category.id}`}>
            <a>
              <CategoryBox category={category} small>
                <div className="text-xs">{category.name}</div>
              </CategoryBox>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};
