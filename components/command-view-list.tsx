import { Command } from "../data/commands";
import { motion } from "framer-motion";
import { CommandView } from "./command-view";
import { FC } from "react";

export const CommandViewList: FC<{
  commands: Command[];
  showCategory?: boolean;
}> = ({ commands, showCategory = false }) => {
  if (commands.length === 0) {
    return <div className="p-2 text-center">nope, didn&apos;t find that</div>;
  }

  return (
    <>
      {commands.map((command, index) => (
        <motion.div
          key={command.id}
          className="p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2 * (index + 1),
          }}
        >
          <CommandView
            command={command.command}
            title={command.title}
            categoryId={showCategory ? command.categoryId : undefined}
          />
        </motion.div>
      ))}
    </>
  );
};
