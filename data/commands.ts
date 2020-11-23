export type Command = {
  id: number;
  categoryId: number;
  title: string;
  command: string;
};

const commandList: Command[] = [
  {
    id: 1,
    categoryId: 1,
    command: "h",
    title: "Move cursor left",
  },
  {
    id: 2,
    categoryId: 1,
    command: "j",
    title: "Move cursor down",
  },
  {
    id: 3,
    categoryId: 1,
    command: "k",
    title: "Move cursor up",
  },
  {
    id: 4,
    categoryId: 1,
    command: "l",
    title: "Move cursor right",
  },
  {
    id: 5,
    categoryId: 1,
    command: "gg",
    title: "Move to first line of the file",
  },
  {
    id: 6,
    categoryId: 2,
    command: "i",
    title: "Insert before the cursor",
  },
  {
    id: 7,
    categoryId: 2,
    command: "I",
    title: "Insert at the beginning of the line",
  },
  {
    id: 8,
    categoryId: 2,
    command: "a",
    title: "Insert after the cursor",
  },
  {
    id: 9,
    categoryId: 2,
    command: "A",
    title: "Insert at the end of the line",
  },
  {
    id: 10,
    categoryId: 3,
    command: "r",
    title: "Replace a single character",
  },
  {
    id: 11,
    categoryId: 3,
    command: "J",
    title: "Join line below to the current one",
  },
];

export type Commands = {
  [id: number]: Command;
};

export const commands: Commands = commandList.reduce(
  (acc, cur) => ({ ...acc, [cur.id]: cur }),
  {}
);
