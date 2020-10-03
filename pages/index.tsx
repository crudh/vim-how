import * as React from "react";
import { useDebounce } from "../hooks/use-debounce";
import { searchCommands } from "../utils/commands";
import { motion } from "framer-motion";
import { CommandBox } from "../components/command-box";

const Home: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search, 300);

  const results = React.useMemo(() => searchCommands(debouncedSearch), [
    debouncedSearch,
  ]);

  return (
    <div>
      <div className="flex justify-center pb-4">
        <input
          className="p-2 bg-black border-white border-2 outline-none rounded-lg"
          placeholder="Search command"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          aria-label="Search"
        />
      </div>
      <div className="flex justify-center">
        <div className="max-w-xl">
          {results.map((command, index) => (
            <motion.div
              key={command.id}
              className="p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2 * (index + 1),
              }}
            >
              <CommandBox {...command} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
