export type Category = {
  id: number;
  name: string;
  colorClass: string;
  description: string;
  descriptionLong: string;
};

export type Categories = {
  [id: number]: Category;
};

export const categories: Categories = {
  1: {
    id: 1,
    name: "Cursor movement",
    colorClass: "bg-blue-700",
    description: "Move the cursor in normal mode",
    descriptionLong:
      "In normal mode you can use these commands to move the cursor around",
  },
  2: {
    id: 2,
    name: "Insert mode",
    colorClass: "bg-red-700",
    description: "Jump into insert mode in different ways",
    descriptionLong:
      "From the normal mode you can use these commands to jump into insert mode in different ways",
  },
};
