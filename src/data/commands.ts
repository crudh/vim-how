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
    description: "This will not start insert mode",
  },
  {
    categoryId: "editing",
    keys: "s",
    title: "Delete a character and replace it",
    description:
      "After the character is deleted insert mode will start for replacement.",
  },
  {
    categoryId: "editing",
    keys: "cc",
    title: "Replace (change) line",
    description:
      "You can append the command with a number to replace multiple lines. For example 5cc to replace 5 lines.",
  },
  {
    categoryId: "editing",
    keys: "S",
    title: "Replace (change) line",
    description: "A shorter form of 'cc'.",
  },
  {
    categoryId: "editing",
    keys: "cw",
    title: "Replace (change) from the cursor to the next word",
    description:
      "A combination of 'c' (for replace) with 'w' (for the beginning of the next word).",
  },
  {
    categoryId: "editing",
    keys: "cb",
    title: "Replace (change) from the cursor to the previous word",
    description:
      "A combination of 'c' (for replace) with 'b' (for the beginning of the previous word).",
  },
  {
    categoryId: "editing",
    keys: "c$",
    title: "Replace (change) from the cursor to the end of the line",
    description:
      "A combination of 'c' (for replace) with '$' (for the end of the line).",
  },
  {
    categoryId: "editing",
    keys: "C",
    title: "Replace (change) from the cursor to the end of the line",
    description: "A shorter form of 'c$'.",
  },
  {
    categoryId: "editing",
    keys: "c0",
    title: "Replace (change) from the cursor to the beginning of the line",
    description:
      "A combination of 'c' (for replace) with '$' (for the beginning of the line).",
  },
  {
    categoryId: "editing",
    keys: "J",
    title: "Join line below to the current one",
    description:
      "The current line and the line below will be joined to form a single line with a space between.",
  },
  {
    categoryId: "editing",
    keys: ".",
    title: "Repeat the last command",
  },
  {
    categoryId: "editing",
    keys: "u",
    title: "Undo",
  },
  {
    categoryId: "editing",
    keys: "r",
    usesMeta: true,
    title: "Redo",
  },
  {
    categoryId: "copypaste",
    keys: "yy",
    title: "Copy (yank) line",
    description:
      "You can append the command with a number to copy multiple lines. For example 5yy to copy 5 lines.",
  },
  {
    categoryId: "copypaste",
    keys: "yw",
    title: "Copy (yank) from the cursor to the next word",
    description:
      "A combination of 'y' (for copy) with 'w' (for the beginning of the next word).",
  },
  {
    categoryId: "copypaste",
    keys: "yb",
    title: "Copy (yank) from the cursor to the previous word",
    description:
      "A combination of 'y' (for copy) with 'b' (for the beginning of the previous word).",
  },
  {
    categoryId: "copypaste",
    keys: "y$",
    title: "Copy (yank) from the cursor to the end of the line",
    description:
      "A combination of 'y' (for copy) with '$' (for the end of the line).",
  },
  {
    categoryId: "copypaste",
    keys: "y0",
    title: "Copy (yank) from the cursor to the beginning of the line",
    description:
      "A combination of 'y' (for copy) with '0' (for the beginning of the line).",
  },
  {
    categoryId: "copypaste",
    keys: "dd",
    title: "Cut (delete) line",
    description:
      "You can append the command with a number to cut multiple lines. For example 5dd to cut 5 lines.",
  },
  {
    categoryId: "copypaste",
    keys: "dw",
    title: "Cut (delete) from the cursor to the next word",
    description:
      "A combination of 'd' (for cut) with 'w' (for the beginning of the next word).",
  },
  {
    categoryId: "copypaste",
    keys: "db",
    title: "Cut (delete) from the cursor to the previous word",
    description:
      "A combination of 'd' (for cut) with 'b' (for the beginning of the previous word).",
  },
  {
    categoryId: "copypaste",
    keys: "d$",
    title: "Cut (delete) from the cursor to the end of the line",
    description:
      "A combination of 'd' (for cut) with '$' (for the end of the line).",
  },
  {
    categoryId: "copypaste",
    keys: "d0",
    title: "Cut (delete) from the cursor to the beginning of the line",
    description:
      "A combination of 'd' (for cut) with '0' (for the beginning of the line).",
  },
  {
    categoryId: "copypaste",
    keys: "D",
    title: "Cut (delete) from the cursor to the end of the line",
    description: "A shorter form of 'd$'.",
  },
  {
    categoryId: "copypaste",
    keys: "x",
    title: "Cut (delete) a single character",
  },
  {
    categoryId: "copypaste",
    keys: "p",
    title: "Paste (put) after the cursor",
  },
  {
    categoryId: "copypaste",
    keys: "P",
    title: "Paste (put) before the cursor",
  },
  {
    categoryId: "visualmode",
    keys: "v",
    title: "Start visual mode",
    description:
      "Select text character by character. This is similar to standard text selection in other editors.",
  },
  {
    categoryId: "visualmode",
    keys: "V",
    title: "Start line based visual mode",
    description: "Select text line by line.",
  },
  {
    categoryId: "visualmode",
    keys: "v",
    usesMeta: true,
    title: "Start block based visual mode",
    description: "Select text by defining a box.",
  },
  {
    categoryId: "visualmode",
    keys: "o",
    title: "Move to the other end of the selection",
  },
];

export type Commands = {
  [id: number]: Command;
};

const createCommandId = ({ categoryId, keys, usesMeta }: CommandWithoutId) =>
  `${categoryId}-${keys}-${usesMeta}`;

export const commands: Commands = commandList.reduce((acc, cur) => {
  const id = createCommandId(cur);
  return { ...acc, [id]: { ...cur, id } };
}, {});
