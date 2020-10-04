export type Category = {
  id: number;
  name: string;
  colorClass: string;
};

export type Categories = {
  [id: number]: Category;
};

export const categories: Categories = {
  1: {
    id: 1,
    name: "Cursor movement",
    colorClass: "bg-blue-600",
  },
  2: {
    id: 2,
    name: "Insert mode",
    colorClass: "bg-red-600",
  },
};
