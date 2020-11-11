import { FC } from "react";

export const CategoryBox: FC<{
  colorClass: string;
  paddingClass?: string;
}> = ({ colorClass, paddingClass = "p-4", children }) => (
  <div
    className={`${colorClass} ${paddingClass} flex flex-col items-center rounded-lg`}
  >
    {children}
  </div>
);
