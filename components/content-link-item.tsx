import { FC } from "react";

export const ContentLinkItem: FC<{ title: string; link: string }> = ({
  title,
  link,
  children,
}) => (
  <div className="transition duration-300 p-4 border-gray-900 border-2 rounded-lg mb-4 hover:border-gray-500">
    <h3>{title}</h3>
    <div className="pt-4 pb-4">{children}</div>
    <a className="font-bold" href={link}>
      {link}
    </a>
  </div>
);
