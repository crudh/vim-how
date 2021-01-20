import { FC } from "react";
import { CommandView } from "./command-view";
import { Command } from "../data/commands";
import { AppearAnimation } from "./appear-animation";

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
        <AppearAnimation
          key={command.id}
          fromClassName="opacity-10"
          toClassName="opacity-100"
          className={`p-2 transition-opacity duration-${Math.min(
            200 * (index + 1),
            2000
          )}`}
        >
          <CommandView command={command} showCategory={showCategory} />
        </AppearAnimation>
      ))}
    </>
  );
};
