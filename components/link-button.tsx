import * as React from "react";
import Link from "next/link";

export const LinkButton: React.FC<{ label: string; to: string }> = ({
  label,
  to,
}) => (
  <Link href={to}>
    <a>
      <div
        className={`inline-block pt-3 pb-3 pl-6 pr-6 rounded-lg uppercase border-gray-900 border-2`}
      >
        {label}
      </div>
    </a>
  </Link>
);
