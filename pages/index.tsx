import { useDebounce } from "../hooks/use-debounce";
import { searchCommands } from "../utils/commands";
import { motion } from "framer-motion";
import { categoriesList } from "../utils/categories";
import { CategoryBox } from "../components/category-box";
import Link from "next/link";
import { CommandViewList } from "../components/command-view-list";
import { useMemo, useState } from "react";

const HomePage: React.FC = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const results = useMemo(() => searchCommands(debouncedSearch), [
    debouncedSearch,
  ]);

  const showCategories = debouncedSearch === "";
  const showNoResults = !showCategories && results.length === 0;

  return (
    <div>
      <div className="flex justify-center pb-8">
        <input
          className="p-2 text-black border-gray-500 border-2 outline-none rounded-lg hover:border-white focus:border-white"
          placeholder="Search command"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
        />
      </div>
      <div className="flex justify-center">
        {showCategories && (
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
        )}
        <div className="max-w-xl">
          <CommandViewList commands={results} showCategory />
          {showNoResults && <div>nope, didn&apos;t find that</div>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
