import { commands, Command } from "../data/commands";

const commandList = Object.values(commands);

const sum = (acc: number, cur: number) => acc + cur;

const grade = (
  term: string,
  source: string,
  exactGrade: number,
  partialGrade = 0
) => {
  const fixedSource = source.toLocaleLowerCase();

  if (fixedSource === term) return exactGrade;
  if (partialGrade === 0) return 0;

  return fixedSource.includes(term) ? partialGrade : 0;
};

const gradeItem = (
  searchTerms: string[],
  source: string,
  exactGrade: number,
  partialGrade = 0
): number =>
  searchTerms
    .map((term) => grade(term, source, exactGrade, partialGrade))
    .reduce(sum, 0);

const gradeItemsList = (
  searchTerms: string[],
  sources: string[],
  exactGrade: number,
  partialGrade = 0
): number =>
  searchTerms
    .map((term) =>
      sources
        .map((source) => grade(term, source, exactGrade, partialGrade))
        .reduce(sum, 0)
    )
    .reduce(sum, 0);

const gradeItemsString = (
  searchTerms: string[],
  source: string,
  exactGrade: number,
  partialGrade = 0
): number =>
  gradeItemsList(searchTerms, source.split(" "), exactGrade, partialGrade);

export const searchCommands = (searchInput: string): Command[] => {
  const search = searchInput.trim().toLocaleLowerCase();
  if (search === "") return [];

  const searchTerms = search.split(" ");

  return commandList
    .map((command) => ({
      points: [
        gradeItem(searchTerms, command.command, 50, 10),
        gradeItemsString(searchTerms, command.title, 5, 3),
        gradeItemsList(searchTerms, command.tags, 4, 2),
      ].reduce(sum, 0),
      command,
    }))
    .filter(({ points }) => points > 0)
    .sort((a, b) => b.points - a.points)
    .map(({ command }) => command) as Command[];
};

export const commandsByCategoryId = (id: number): Command[] =>
  commandList.filter((command) => command.categoryId === id);
