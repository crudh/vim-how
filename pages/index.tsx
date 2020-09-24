import * as React from "react";
import { useDebounce } from "../hooks/use-debounce";
import commands from "../data/commands.json";
import { useSpring, animated } from "react-spring";

type Command = {
  id: number;
  categoryId: number;
  title: string;
  tags: string;
  command: string;
  description: string;
};

const commandList = commands.commands;
// const categoryList = commands.categories;

const sum = (acc: number, cur: number) => acc + cur;

const grade = (
  searchTerms: string[],
  source: string,
  exactGrade: number,
  partialGrade = 0
): number =>
  searchTerms
    .map((term) => {
      const fixedSource = source.toLocaleLowerCase();

      if (fixedSource === term) return exactGrade;
      if (partialGrade === 0) return 0;

      return fixedSource.includes(term) ? partialGrade : 0;
    })
    .reduce(sum, 0);

const searchCommands = (searchInput: string): Command[] => {
  const search = searchInput.trim().toLocaleLowerCase();
  if (search === "") return [];

  const searchTerms = search.split(" ");

  return commandList
    .map((command) => ({
      points: [
        grade(searchTerms, command.command, 10, 5),
        // maybe this one should check tag by tag? add a new grade-function for that? change to an array in json then
        grade(searchTerms, command.tags, 3, 3),
      ].reduce(sum, 0),
      command,
    }))
    .filter(({ points }) => points > 0)
    .sort((a, b) => b.points - a.points)
    .map(({ command }) => command) as Command[];
};

const Command: React.FC<{
  title: string;
  command: string;
  description: string;
}> = ({ title, command, description }) => (
  <div>
    <h3>{title}</h3>
    <div>{command}</div>
    <div>{description}</div>
  </div>
);

const AnimatedOpacity: React.FC<{
  duration: number;
  children: React.ReactNode;
}> = ({ duration = 500, children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration },
  });

  return (
    <animated.div style={props} className="p-4 border-gray-500 border-2">
      {children}
    </animated.div>
  );
};

const Home: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search, 300);

  const results = React.useMemo(() => searchCommands(debouncedSearch), [
    debouncedSearch,
  ]);

  return (
    <div>
      <div className="grid place-items-center pb-4">
        <input
          className="border-gray-800 border-2 p-2"
          placeholder="Search command"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          aria-label="Search"
        />
      </div>
      <div className="grid place-items-center">
        <div className="max-w-md">
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
