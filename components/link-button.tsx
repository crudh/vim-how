import { FC } from "react";
import Link from "next/link";

export const LinkButton: FC<{ label: string; to: string }> = ({
  label,
  to,
}) => (
  <Link href={to}>
    <a>
      <button className="transition duration-300 inline-block pt-2 pb-2 pl-6 pr-6 rounded-lg uppercase border-gray-500 border-2 hover:border-white">
        {label}
      </button>
    </a>
  </Link>
);
