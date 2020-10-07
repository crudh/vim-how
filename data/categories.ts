export type Category = {
  id: number;
  name: string;
  colorClass: string;
  description: string;
};

export type Categories = {
  [id: number]: Category;
};

export const categories: Categories = {
  1: {
    id: 1,
    name: "Cursor movement",
    colorClass: "bg-blue-600",
    description: "Move the cursor in normal mode",
  },
  2: {
    id: 2,
    name: "Insert mode",
    colorClass: "bg-red-600",
    description: "Jump into insert mode in different ways",
  },
};
