import { FC } from "react";
import Link from "next/link";
import { CategoryBox } from "./category-box";
import { Command } from "../data/commands";
import { categoryById } from "../data/categories";

const CommandKey: React.FC = ({ children }) => (
  <div className="text-3xl bg-white text-black pl-3 pr-3 rounded-lg mr-2">
    {children}
  </div>
);

const MetaKey: React.FC = () => (
  <>
    <CommandKey>Ctrl</CommandKey>
    <div className="text-3xl mr-2">+</div>
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
    <div className="transition duration-300 p-4 border-gray-900 border-2 rounded-lg hover:border-gray-500">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex pr-2 pb-2 items-baseline">
          <CommandKeys command={command} />
        </div>
        <div className="flex items-center text-lg pb-2">{command.title}</div>
      </div>
      {command.description && (
        <div className="pt-4 text-gray-400">{command.description}</div>
      )}
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
