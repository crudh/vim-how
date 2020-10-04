export type Command = {
  id: number;
  categoryId: number;
  title: string;
  tags: string[];
  command: string;
  description: string;
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
    description: "",
  },
  2: {
    id: 2,
    categoryId: 1,
    title: "Move cursor down",
    tags: ["cursor", "movement", "move", "down", "navigation", "j"],
    command: "j",
    description: "",
  },
  3: {
    id: 3,
    categoryId: 1,
    title: "Move cursor up",
    tags: ["cursor", "movement", "move", "up", "navigation", "k"],
    command: "k",
    description: "",
  },
  4: {
    id: 4,
    categoryId: 1,
    title: "Move cursor right",
    tags: ["cursor", "movement", "move", "right", "navigation", "l"],
    command: "l",
    description: "",
  },
  5: {
    id: 5,
    categoryId: 1,
    title: "Move to first line of the file",
    tags: ["cursor", "movement", "move", "first line", "navigation", "gg"],
    command: "gg",
    description: "",
  },
  6: {
    id: 6,
    categoryId: 2,
    title: "Insert before the cursor",
    tags: [],
    command: "i",
    description: "",
  },
  7: {
    id: 7,
    categoryId: 2,
    title: "Insert at the beginning of the line",
    tags: [],
    command: "I",
    description: "",
  },
  8: {
    id: 8,
    categoryId: 2,
    title: "Insert after the cursor",
    tags: [],
    command: "a",
    description: "",
  },
  9: {
    id: 9,
    categoryId: 2,
    title: "Insert at the end of the line",
    tags: [],
    command: "A",
    description: "",
  },
};
