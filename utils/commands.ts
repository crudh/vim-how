import { commands, Command } from "../data/commands";
import { categories } from "../data/categories";

const commandList = Object.values(commands);
export const categoriesList = Object.values(categories);

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

const gradeList = (
  searchTerms: string[],
  sources: string[],
  exactGrade: number,
  partialGrade = 0
): number =>
  searchTerms
    .map((term) =>
      sources
        .map((source) => {
          const fixedSource = source.toLocaleLowerCase();

          if (fixedSource === term) return exactGrade;
          if (partialGrade === 0) return 0;

          return fixedSource.includes(term) ? partialGrade : 0;
        })
        .reduce(sum, 0)
    )
    .reduce(sum, 0);

export const searchCommands = (searchInput: string): Command[] => {
  const search = searchInput.trim().toLocaleLowerCase();
  if (search === "") return [];

  const searchTerms = search.split(" ");

  return commandList
    .map((command) => ({
      points: [
        grade(searchTerms, command.command, 50, 10),
        gradeList(searchTerms, command.tags, 3, 1),
      ].reduce(sum, 0),
      command,
    }))
    .filter(({ points }) => points > 0)
    .sort((a, b) => b.points - a.points)
    .map(({ command }) => command) as Command[];
};
