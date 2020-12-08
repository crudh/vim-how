import { FC } from "react";
import Link from "next/link";
import { CategoryBox } from "./category-box";
import { Command } from "../data/commands";
import { categoryById } from "../utils/categories";
import { isMac } from "../utils/environment";

const CommandKey: React.FC = ({ children }) => (
  <div className="text-4xl bg-white text-black pl-3 pr-3 rounded-lg mr-2">
    {children}
  </div>
);

const MetaKey: React.FC = () => (
  <>
    <CommandKey>{isMac() ? "\u2318" : "Ctrl"}</CommandKey>
    <div className="text-4xl mr-2">+</div>
  </>
);

const CommandKeys: React.FC<{ command: Command }> = ({
  command: { keys, usesMeta },
}) => (
  <>
    {usesMeta ? <MetaKey /> : null}
    {keys.split("").map((key, index) => (
      <CommandKey key={index}>{key}</CommandKey>
    ))}
  </>
);

export const CommandView: FC<{
  command: Command;
  showCategory?: boolean;
}> = ({ command, showCategory = false }) => {
  const category = showCategory ? categoryById(command.categoryId) : undefined;

  return (
    <div className="p-4 border-gray-900 border-2 rounded-lg">
      <div className="flex">
        <div className="flex pr-2">
          <CommandKeys command={command} />
        </div>
        <div className="flex items-center">{command.title}</div>
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
