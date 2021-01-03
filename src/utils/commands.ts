import { commands, Command } from "../data/commands";
import { categoryById } from "../data/categories";

const commandList = Object.values(commands);

const sum = (acc: number, cur: number) => acc + cur;

const grader = (
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

const gradeString = (
  searchTerms: string[],
  source: string,
  exactGrade: number,
  partialGrade = 0
): number =>
  searchTerms
    .map((term) => grader(term, source, exactGrade, partialGrade))
    .reduce(sum, 0);

export const searchCommands = (
  searchInput: string,
  categoryId?: string
): Command[] => {
  const search = searchInput.trim().toLocaleLowerCase();
  if (search === "") return [];

  const searchTerms = search.split(" ");

  return commandList
    .map((command) => ({
      points:
        categoryId !== undefined && categoryId !== command.categoryId
          ? 0
          : [
              gradeString(searchTerms, command.keys, 500, 100),
              gradeString(searchTerms, command.title, 100, 20),
              gradeString(searchTerms, command.description ?? "", 10, 5),
              gradeString(
                searchTerms,
                categoryById(command.categoryId)?.name ?? "",
                10,
                5
              ),
              gradeString(
                searchTerms,
                categoryById(command.categoryId)?.description ?? "",
                3,
                3
              ),
              gradeString(
                searchTerms,
                categoryById(command.categoryId)?.descriptionLong ?? "",
                3,
                3
              ),
            ].reduce(sum, 0),
      command,
    }))
    .filter(({ points }) => points > 0)
    .sort((a, b) => b.points - a.points)
    .map(({ command }) => command) as Command[];
};

export const commandsByCategoryId = (id: string): Command[] =>
  commandList.filter((command) => command.categoryId === id);
