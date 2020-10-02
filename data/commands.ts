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
    description: "Move cursor left",
  },
  2: {
    id: 2,
    categoryId: 1,
    title: "Move cursor down",
    tags: ["cursor", "movement", "move", "down", "navigation", "j"],
    command: "j",
    description: "Move cursor down",
  },
  3: {
    id: 3,
    categoryId: 1,
    title: "Move cursor up",
    tags: ["cursor", "movement", "move", "up", "navigation", "k"],
    command: "k",
    description: "Move cursor up",
  },
  4: {
    id: 4,
    categoryId: 1,
    title: "Move cursor right",
    tags: ["cursor", "movement", "move", "right", "navigation", "l"],
    command: "l",
    description: "Move cursor right",
  },
  5: {
    id: 5,
    categoryId: 1,
    title: "Move to first line of the file",
    tags: ["cursor", "movement", "move", "first line", "navigation", "gg"],
    command: "gg",
    description: "Move to first line of the file",
  },
};
