import { FC, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { CategoryBox } from "../components/category-box";
import { CommandViewList } from "../components/command-view-list";
import { categoryList } from "../data/categories";
import { searchCommands } from "../utils/commands";
import { SearchInput } from "../components/search-input";
import { useQuery } from "../hooks/use-query";

const StartPage: FC = () => {
  const router = useRouter();
  const { search = "" } = useQuery(router);

  const results = useMemo(() => searchCommands(search), [search]);
  const showCategories = search === "";

  const handleUpdateSearch = (input: string) =>
    router.replace(
      {
        pathname: router.pathname,
        query: { search: input },
      },
      undefined,
      { shallow: true }
    );

  return (
    <>
      <SearchInput value={search} onUpdate={handleUpdateSearch} />
      {showCategories ? (
        <>
          <h2 className="pt-8 pb-8 uppercase">Categories</h2>
          <div className="max-w-xl">
            {categoryList.map((category, index) => (
              <motion.div
                key={category.id}
                className="p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 * (index + 1) }}
              >
                <Link href={`/categories/${category.id}`}>
                  <a>
                    <CategoryBox category={category}>
                      <div className="uppercase">{category.name}</div>
                      <div className="text-sm">{category.description}</div>
                    </CategoryBox>
                  </a>
                </Link>
              </motion.div>
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
