import * as React from "react";

export const Category: React.FC<{ name: string; colorClass: string }> = ({
  name,
  colorClass,
}) => <div className={colorClass}>{name}</div>;
