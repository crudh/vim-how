import { FC, SVGProps, useState } from "react";
import Link from "next/link";
import { useIsOffline } from "../hooks/use-is-offline";
import { menuItems } from "../data/menu-items";
import { AppearAnimation } from "./appear-animation";

const MenuTogglePath: FC<SVGProps<SVGPathElement>> = (props) => (
  <path
    className="transition-all duration-500"
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: FC<{ isOpen: boolean; onToggle: () => void }> = ({
  isOpen,
  onToggle,
}) => (
  <button
    className="absolute top-5 left-5"
    onClick={onToggle}
    aria-label="Menu button"
  >
    <svg width="30" height="30" viewBox="0 0 20 20">
      <MenuTogglePath d={isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"} />
      <MenuTogglePath d="M 2 9.423 L 20 9.423" opacity={isOpen ? 0 : 1} />
      <MenuTogglePath
        d={isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
      />
    </svg>
  </button>
);

export const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isOffLine = useIsOffline();

  return (
    <>
      <div
        className={`absolute left-0 top-0 bottom-0 bg-black bg-opacity-90 overflow-hidden transition-all duration-500 ${
          isOpen ? "w-px-300 border-white border-r-[1px]" : "w-0"
        }`}
      >
        <div className="absolute top-20 left-10">
          <ul className="list-inside">
            {(isOpen ? menuItems : []).map(
              (
                {
                  name,
                  url,
                  isExternal = false,
                  isSubItem = false,
                  spaceAbove = false,
                },
                index
              ) => (
                <AppearAnimation
                  key={index}
                  fromClassName="opacity-10"
                  toClassName="opacity-100"
                  className={`${
                    spaceAbove ? "pt-6" : ""
                  } transition-opacity duration-${Math.min(
                    200 * (index + 1),
                    2000
                  )}`}
                >
                  <li>
                    <Link href={url} passHref>
                      <button
                        className={`${
                          isSubItem ? "text-m pl-4" : "text-xl"
                        } text-left p-1 mb-4 whitespace-nowrap disabled:opacity-40 disabled:cursor-default`}
                        onClick={() => setIsOpen(false)}
                        disabled={isExternal && isOffLine}
                      >
                        {name}
                      </button>
                    </Link>
                  </li>
                </AppearAnimation>
              )
            )}
          </ul>
        </div>
      </div>
      <MenuToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  );
};
