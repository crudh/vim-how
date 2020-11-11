export type Command = {
  id: number;
  categoryId: number;
  title: string;
  tags: string[];
  command: string;
};

const commandList: Command[] = [
  {
    id: 1,
    categoryId: 1,
    command: "h",
    title: "Move cursor left",
    tags: ["cursor", "movement", "move", "left", "navigation", "h"],
  },
  {
    id: 2,
    categoryId: 1,
    command: "j",
    title: "Move cursor down",
    tags: ["cursor", "movement", "move", "down", "navigation", "j"],
  },
  {
    id: 3,
    categoryId: 1,
    command: "k",
    title: "Move cursor up",
    tags: ["cursor", "movement", "move", "up", "navigation", "k"],
  },
  {
    id: 4,
    categoryId: 1,
    command: "l",
    title: "Move cursor right",
    tags: ["cursor", "movement", "move", "right", "navigation", "l"],
  },
  {
    id: 5,
    categoryId: 1,
    command: "gg",
    title: "Move to first line of the file",
    tags: ["cursor", "movement", "move", "first line", "navigation", "gg"],
  },
  {
    id: 6,
    categoryId: 2,
    command: "i",
    title: "Insert before the cursor",
    tags: [],
  },
  {
    id: 7,
    categoryId: 2,
    command: "I",
    title: "Insert at the beginning of the line",
    tags: [],
  },
  {
    id: 8,
    categoryId: 2,
    command: "a",
    title: "Insert after the cursor",
    tags: [],
  },
  {
    id: 9,
    categoryId: 2,
    command: "A",
    title: "Insert at the end of the line",
    tags: [],
  },
  {
    id: 10,
    categoryId: 3,
    command: "r",
    title: "Replace a single character",
    tags: [],
  },
  {
    id: 11,
    categoryId: 3,
    command: "J",
    title: "Join line below to the current one",
    tags: [],
  },
];

export type Commands = {
  [id: number]: Command;
};

export const commands: Commands = commandList.reduce(
  (acc, cur) => ({ ...acc, [cur.id]: cur }),
  {}
);
