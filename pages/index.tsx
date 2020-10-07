import * as React from "react";
import { useDebounce } from "../hooks/use-debounce";
import { searchCommands } from "../utils/commands";
import { motion } from "framer-motion";
import { categoriesList } from "../utils/categories";
import { CategoryBox } from "../components/category-box";
import Link from "next/link";
import { CommandBoxList } from "../components/command-box-list";

const HomePage: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search, 300);
  const searchRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    searchRef.current && searchRef.current.focus();
  }, [searchRef]);

  const results = React.useMemo(() => searchCommands(debouncedSearch), [
    debouncedSearch,
  ]);

  const showCategories = debouncedSearch === "";
  const showNoResults = debouncedSearch !== "" && results.length === 0;

  return (
    <div>
      <div className="flex justify-center pb-12">
        <input
          ref={searchRef}
          className="p-2 bg-black border-white border-2 outline-none rounded-lg"
          placeholder="Search command"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
          autoFocus
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
                    <CategoryBox {...category} />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
        <div className="max-w-xl">
          <CommandBoxList commands={results} />
          {showNoResults && <div>nopes</div>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
