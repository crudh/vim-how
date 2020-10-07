import * as React from "react";
import { CommandBoxList } from "../../components/command-box-list";
import { commandsByCategoryId } from "../../utils/commands";
import { useRouter } from "next/router";
import { LinkButton } from "../../components/link-button";
import { categoriesList, categoryById } from "../../utils/categories";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => ({ props: {} });

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: categoriesList.map((category) => ({
    params: { id: category.id.toString() },
  })),
  fallback: false,
});

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const category = categoryById(id);
  const commands = commandsByCategoryId(id);

  return (
    <div className="flex flex-col items-center">
      <div className="pb-8">
        <LinkButton label="Back" to="/" />
      </div>
      <h2>{category.name}</h2>
      <div>{category.description}</div>
      <div className="max-w-xl pt-6">
        <CommandBoxList commands={commands} />
      </div>
    </div>
  );
};

export default CategoryPage;
