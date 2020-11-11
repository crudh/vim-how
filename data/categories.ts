export type Category = {
  id: number;
  name: string;
  colorClass: string;
  description: string;
  descriptionLong: string;
};

const categoryList: Category[] = [
  {
    id: 1,
    name: "Cursor movement",
    colorClass: "bg-blue-700",
    description: "Move the cursor in normal mode",
    descriptionLong:
      "In normal mode you can use these commands to move the cursor around",
  },
  {
    id: 2,
    name: "Insert mode",
    colorClass: "bg-red-700",
    description: "Go into insert mode in different ways",
    descriptionLong:
      "From the normal mode you can use these commands to jump into insert mode in different ways. Insert mode is where you enter text similar to a regular text editor",
  },
  {
    id: 3,
    name: "Editing",
    colorClass: "bg-green-700",
    description: "Editing of text while in normal mode",
    descriptionLong:
      "In normal mode you can use these commands for quick editing of text without going into insert mode",
  },
  {
    id: 4,
    name: "Visual mode",
    colorClass: "bg-yellow-700",
    description: "Selecting text in different ways",
    descriptionLong:
      "You use visual mode to select text in different ways. You can then use different commands to affect the text",
  },
];

export type Categories = {
  [id: number]: Category;
};

export const categories: Categories = categoryList.reduce(
  (acc, cur) => ({ ...acc, [cur.id]: cur }),
  {}
);
