import { CategoryId } from "./categories";

export type Command = {
  id: number;
  categoryId: CategoryId;
  keys: string;
  usesMeta?: boolean;
  title: string;
};

const commandList: Command[] = [
  {
    id: 1,
    categoryId: "cursormovement",
    keys: "h",
    title: "Move cursor left",
  },
  {
    id: 2,
    categoryId: "cursormovement",
    keys: "j",
    title: "Move cursor down",
  },
  {
    id: 3,
    categoryId: "cursormovement",
    keys: "k",
    title: "Move cursor up",
  },
  {
    id: 4,
    categoryId: "cursormovement",
    keys: "l",
    title: "Move cursor right",
  },
  {
    id: 5,
    categoryId: "cursormovement",
    keys: "gg",
    title: "Move to first line of the file",
  },
  {
    id: 6,
    categoryId: "insertmode",
    keys: "i",
    title: "Insert before the cursor",
  },
  {
    id: 7,
    categoryId: "insertmode",
    keys: "I",
    title: "Insert at the beginning of the line",
  },
  {
    id: 8,
    categoryId: "insertmode",
    keys: "a",
    title: "Insert after the cursor",
  },
  {
    id: 9,
    categoryId: "insertmode",
    keys: "A",
    title: "Insert at the end of the line",
  },
  {
    id: 10,
    categoryId: "editing",
    keys: "r",
    title: "Replace a single character",
  },
  {
    id: 11,
    categoryId: "editing",
    keys: "J",
    title: "Join line below to the current one",
  },
  {
    id: 12,
    categoryId: "cursormovement",
    keys: "b",
    usesMeta: true,
    title: "Move the cursor up a full screen",
  },
];

export type Commands = {
  [id: number]: Command;
};

export const commands: Commands = commandList.reduce(
  (acc, cur) => ({ ...acc, [cur.id]: cur }),
  {}
);
