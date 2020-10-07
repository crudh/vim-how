import * as React from "react";
import { CommandBoxList } from "../../components/command-box-list";
import { commandsByCategoryId } from "../../utils/commands";
import { useRouter } from "next/router";
import { LinkButton } from "../../components/link-button";

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const commands = commandsByCategoryId(id);

  return (
    <div className="flex flex-col items-center">
      <div className="pb-4">
        <LinkButton label="Back" to="/" />
      </div>
      <div className="max-w-xl">
        <CommandBoxList commands={commands} />
      </div>
    </div>
  );
};

export default CategoryPage;
