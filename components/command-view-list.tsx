import { Command } from "../data/commands";
import { motion } from "framer-motion";
import { CommandView } from "./command-view";

export const CommandViewList: React.FC<{
  commands: Command[];
  showCategory?: boolean;
}> = ({ commands, showCategory = false }) => (
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
