import * as React from "react";

export const CategoryBox: React.FC<{ name: string; colorClass: string }> = ({
  name,
  colorClass,
}) => (
  <div className={`${colorClass} flex justify-center p-4 rounded-lg uppercase`}>
    {name}
  </div>
);
