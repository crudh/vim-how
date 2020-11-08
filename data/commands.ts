export type Command = {
  id: number;
  categoryId: number;
  title: string;
  tags: string[];
  command: string;
};

export type Commands = {
  [id: number]: Command;
};

export const commands: Commands = {
  1: {
    id: 1,
    categoryId: 1,
    title: "Move cursor left",
    tags: ["cursor", "movement", "move", "left", "navigation", "h"],
    command: "h",
  },
  2: {
    id: 2,
    categoryId: 1,
    title: "Move cursor down",
    tags: ["cursor", "movement", "move", "down", "navigation", "j"],
    command: "j",
  },
  3: {
    id: 3,
    categoryId: 1,
    title: "Move cursor up",
    tags: ["cursor", "movement", "move", "up", "navigation", "k"],
    command: "k",
  },
  4: {
    id: 4,
    categoryId: 1,
    title: "Move cursor right",
    tags: ["cursor", "movement", "move", "right", "navigation", "l"],
    command: "l",
  },
  5: {
    id: 5,
    categoryId: 1,
    title: "Move to first line of the file",
    tags: ["cursor", "movement", "move", "first line", "navigation", "gg"],
    command: "gg",
  },
  6: {
    id: 6,
    categoryId: 2,
    title: "Insert before the cursor",
    tags: [],
    command: "i",
  },
  7: {
    id: 7,
    categoryId: 2,
    title: "Insert at the beginning of the line",
    tags: [],
    command: "I",
  },
  8: {
    id: 8,
    categoryId: 2,
    title: "Insert after the cursor",
    tags: [],
    command: "a",
  },
  9: {
    id: 9,
    categoryId: 2,
    title: "Insert at the end of the line",
    tags: [],
    command: "A",
  },
};
