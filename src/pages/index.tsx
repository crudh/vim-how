import { FC, useMemo } from "react";
import Link from "next/link";
import { CategoryBox } from "../components/category-box";
import { CommandViewList } from "../components/command-view-list";
import { categoryList } from "../data/categories";
import { searchCommands } from "../utils/commands";
import { SearchInput } from "../components/search-input";
import { useCommandSearch } from "../hooks/use-command-search";
import { AppearAnimation } from "../components/appear-animation";

const StartPage: FC = () => {
  const [search, input, setInput] = useCommandSearch();

  const results = useMemo(() => searchCommands(search), [search]);
  const showCategories = search === "";

  return (
    <>
      <SearchInput value={input} onUpdate={setInput} />
      {showCategories ? (
        <>
          <h2 className="pt-8 pb-8 uppercase">Categories</h2>
          <div className="max-w-xl">
            {categoryList.map((category, index) => (
              <AppearAnimation
                key={category.id}
                fromClassName="opacity-10"
                toClassName="opacity-100"
                className={`p-2 transition-opacity duration-${Math.min(
                  200 * (index + 1),
                  2000
                )}`}
              >
                <Link href={`/categories/${category.id}`}>
                  <a>
                    <CategoryBox category={category}>
                      <div className="uppercase">{category.name}</div>
                      <div className="text-sm">{category.description}</div>
                    </CategoryBox>
                  </a>
                </Link>
              </AppearAnimation>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 pt-8">
          <CommandViewList commands={results} showCategory />
        </div>
      )}
    </>
  );
};

export default StartPage;
