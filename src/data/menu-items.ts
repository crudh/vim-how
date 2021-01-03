import { categoryList } from "./categories";

export type MenuItem = {
  name: string;
  url: string;
  isExternal?: boolean;
  isSubItem?: boolean;
  spaceAbove?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    name: "Start",
    url: "/",
  },
  ...categoryList.map((category) => ({
    name: category.name,
    url: `/categories/${category.id}`,
    isSubItem: true,
  })),
  {
    name: "Cheat sheets",
    url: "/cheatsheets",
    spaceAbove: true,
  },
  { name: "Tutorials", url: "/tutorials" },
  { name: "Editors", url: "/editors" },
  {
    name: "GitHub",
    url: "https://github.com/crudh/vim-how",
    isExternal: true,
    spaceAbove: true,
  },
  { name: "Contact", url: "https://crudh.se", isExternal: true },
];
