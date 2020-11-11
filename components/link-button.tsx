import Link from "next/link";
import { FC } from "react";

export const LinkButton: FC<{ label: string; to: string }> = ({
  label,
  to,
}) => (
  <Link href={to}>
    <a>
      <div
        className={`inline-block pt-2 pb-2 pl-6 pr-6 rounded-lg uppercase border-gray-500 border-2 hover:border-white`}
      >
        {label}
      </div>
    </a>
  </Link>
);
