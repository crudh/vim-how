export type CategoryId =
  | "cursormovement"
  | "insertmode"
  | "editing"
  | "copypaste"
  | "visualmode";

export type Category = {
  id: CategoryId;
  name: string;
  colorClass: string;
  description: string;
  descriptionLong: string;
};

export const categoryList: Category[] = [
  {
    id: "cursormovement",
    name: "Cursor movement",
    colorClass: "bg-blue-700",
    description: "Move the cursor in normal mode",
    descriptionLong:
      "In normal mode you can use these commands to move the cursor around.",
  },
  {
    id: "insertmode",
    name: "Insert mode",
    colorClass: "bg-red-700",
    description: "Go into insert mode in different ways",
    descriptionLong:
      "From the normal mode you can use these commands to jump into insert mode in different ways. Insert mode is where you enter text similar to a regular text editor. Use the escape key to go back to normal mode.",
  },
  {
    id: "editing",
    name: "Editing",
    colorClass: "bg-green-700",
    description: "Editing of text while in normal mode",
    descriptionLong:
      "In normal mode you can use these commands for both quick editing of text, without going into insert mode, or to initiate insert mode after making a specific edit.",
  },
  {
    id: "copypaste",
    name: "Copy & paste",
    colorClass: "bg-orange-700",
    description: "Copy, cut and paste text",
    descriptionLong:
      "In normal mode you can use these commands to copy, cut and paste text, whole lines or multiple lines.",
  },
  {
    id: "visualmode",
    name: "Visual mode",
    colorClass: "bg-pink-700",
    description: "Selecting text in different ways",
    descriptionLong:
      "You use visual mode to select text in different ways. You can then use different commands to affect the text, for example copy or cut. Use the escape key to go back to normal mode.",
  },
];

export type Categories = {
  [id: string]: Category;
};

export const categories: Categories = categoryList.reduce(
  (acc, cur) => ({ ...acc, [cur.id]: cur }),
  {}
);

export const categoryById = (id: string): Category | undefined =>
  categories[id];
