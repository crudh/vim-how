import { searchCommands } from "../utils/commands";
import { motion } from "framer-motion";
import { categoriesList } from "../utils/categories";
import { CategoryBox } from "../components/category-box";
import Link from "next/link";
import { CommandViewList } from "../components/command-view-list";
import { ChangeEvent, FC, useMemo } from "react";
import { useRouter } from "next/router";
import { queryParamAsString } from "../utils/routes";

const StartPage: FC = () => {
  const router = useRouter();
  const search = queryParamAsString(router.query.search);

  const results = useMemo(() => searchCommands(search), [search]);
  const showCategories = search === "";

  const handleUpdateSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const path = input === "" ? "/" : `/?search=${input}`;

    router.push(encodeURI(path), undefined, { shallow: true });
  };

  return (
    <>
      <input
        className="p-2 text-black border-gray-500 border-2 outline-none rounded-lg hover:border-white focus:border-white"
        placeholder="Search command"
        type="text"
        value={search}
        onChange={handleUpdateSearch}
        aria-label="Search"
      />
      {showCategories ? (
        <>
          <h2 className="pt-8 pb-8 uppercase">Categories</h2>
          <div className="max-w-xl">
            {categoriesList.map((category, index) => (
              <motion.div
                key={category.id}
                className="p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 * (index + 1) }}
              >
                <Link href={`/categories/${category.id}`}>
                  <a>
                    <CategoryBox colorClass={category.colorClass}>
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
        <div className="w-full sm:w-2/3 md:w-1/2 xl:w-1/3 pt-8">
          <CommandViewList commands={results} showCategory />
        </div>
      )}
    </>
  );
};

export default StartPage;
