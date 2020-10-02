import * as React from "react";
import { AnimatedOpacity } from "../components/animated-opacity";
import { useDebounce } from "../hooks/use-debounce";
import { searchCommands } from "../utils/commands";

// const Category: React.FC<{ name: string; colorClass: string }> = ({
//   name,
//   colorClass,
// }) => <div className={colorClass}>{name}</div>;

const Command: React.FC<{
  title: string;
  command: string;
  description: string;
}> = ({ title, command, description }) => (
  <div className="grid grid-rows-3 grid-cols-3 gap-4">
    <div className="row-span-3 flex justify-center pt-1 items-baseline">
      <div className="text-4xl bg-white text-black pl-3 pr-3 rounded-lg">
        {command}
      </div>
    </div>
    <div className="row-span-1 col-span-2">{title}</div>
    <div className="row-span-2 col-span-2">{description}</div>
  </div>
);

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
          className="p-2 bg-black border-white border-2 outline-none"
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
          {results.map((result, index) => (
            <div key={result.id} className="p-2">
              <AnimatedOpacity duration={300 + index * 100}>
                <Command {...result} />
              </AnimatedOpacity>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
