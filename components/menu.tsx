import { FC, useState } from "react";
import { motion, SVGMotionProps } from "framer-motion";
import Link from "next/link";
import { isOffLine } from "../utils/environment";

const menuItems = [
  {
    name: "Cheat sheets",
    url: "/cheatsheets",
  },
  { name: "Tutorials", url: "/tutorials" },
  { name: "GitHub", url: "https://github.com/crudh/vim-how", isExternal: true },
  { name: "Contact", url: "https://crudh.se", isExternal: true },
];

const MenuTogglePath: FC<SVGMotionProps<SVGPathElement>> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: FC<{ onToggle: () => void }> = ({ onToggle }) => (
  <button
    className="absolute top-5 left-5 select-none outline-none"
    onClick={onToggle}
  >
    <svg width="30" height="30" viewBox="0 0 23 23">
      <MenuTogglePath
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <MenuTogglePath
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      <MenuTogglePath
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.div
          className="absolute left-0 top-0 bottom-0 bg-black bg-opacity-90"
          variants={{ open: { width: 300 }, closed: { width: 0 } }}
        >
          <div className="absolute top-20 left-10">
            <ul className="list-inside">
              {(isOpen ? menuItems : []).map(
                ({ name, url, isExternal }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.2 * (index + 1),
                    }}
                  >
                    <li>
                      <Link href={url}>
                        <button
                          className="text-xl text-left pb-5 disabled:opacity-40"
                          onClick={() => setIsOpen(false)}
                          disabled={isExternal && isOffLine()}
                        >
                          {name}
                        </button>
                      </Link>
                    </li>
                  </motion.div>
                )
              )}
            </ul>
          </div>
        </motion.div>
        <MenuToggle onToggle={() => setIsOpen(!isOpen)} />
      </motion.nav>
    </>
  );
};
