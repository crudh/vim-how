import { CategoryId } from "./categories";

export type Command = {
  id: string;
  categoryId: CategoryId;
  keys: string;
  usesMeta?: boolean;
  title: string;
  description?: string;
};

type CommandWithoutId = Omit<Command, "id">;

const commandList: CommandWithoutId[] = [
  {
    categoryId: "cursormovement",
    keys: "h",
    title: "Move cursor left",
  },
  {
    categoryId: "cursormovement",
    keys: "j",
    title: "Move cursor down",
  },
  {
    categoryId: "cursormovement",
    keys: "k",
    title: "Move cursor up",
  },
  {
    categoryId: "cursormovement",
    keys: "l",
    title: "Move cursor right",
  },
  {
    categoryId: "cursormovement",
    keys: "gg",
    title: "Move to first line of the file",
  },
  {
    categoryId: "cursormovement",
    keys: "b",
    usesMeta: true,
    title: "Move the cursor up a full screen",
  },
  {
    categoryId: "insertmode",
    keys: "i",
    title: "Insert before the cursor",
  },
  {
    categoryId: "insertmode",
    keys: "I",
    title: "Insert at the beginning of the line",
  },
  {
    categoryId: "insertmode",
    keys: "a",
    title: "Insert after the cursor",
  },
  {
    categoryId: "insertmode",
    keys: "A",
    title: "Insert at the end of the line",
  },
  {
    categoryId: "editing",
    keys: "r",
    title: "Replace a single character",
  },
  {
    categoryId: "editing",
    keys: "J",
    title: "Join line below to the current one",
  },
  {
    categoryId: "copypaste",
    keys: "yy",
    title: "Copy/yank line",
    description:
      "You can append the command with a number to copy multiple lines. For example 5yy to copy 5 lines.",
  },
];

export type Commands = {
  [id: number]: Command;
};

const createCommandId = (command: CommandWithoutId) =>
  `${command.categoryId}-${command.keys}`;

export const commands: Commands = commandList.reduce((acc, cur) => {
  const id = createCommandId(cur);
  return { ...acc, [id]: { ...cur, id } };
}, {});
