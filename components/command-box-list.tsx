import * as React from "react";
import { Command } from "../data/commands";
import { motion } from "framer-motion";
import { CommandBox } from "./command-box";

export const CommandBoxList: React.FC<{ commands: Command[] }> = ({
  commands,
}) => (
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
        <CommandBox {...command} />
      </motion.div>
    ))}
  </>
);
