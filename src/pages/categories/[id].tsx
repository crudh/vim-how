import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { CategoryBox } from "../../components/category-box";
import { CommandViewList } from "../../components/command-view-list";
import { LinkButton } from "../../components/link-button";
import { categoryList, categoryById } from "../../data/categories";
import { commandsByCategoryId, searchCommands } from "../../utils/commands";
import { SearchInput } from "../../components/search-input";
import { useQuery } from "../../hooks/use-query";
import { useCommandSearch } from "../../hooks/use-command-search";

export const getStaticProps: GetStaticProps = async () => ({ props: {} });

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: categoryList.map((category) => ({
    params: { id: category.id },
  })),
  fallback: false,
});

const CategoryPage: FC = () => {
  const router = useRouter();
  const { id: categoryId } = useQuery(router);
  const [search, input, setInput] = useCommandSearch({ id: categoryId });

  const category = categoryById(categoryId);
  if (!category) return null;

  const commands =
    search === ""
      ? commandsByCategoryId(categoryId)
      : searchCommands(search, categoryId);

  return (
    <>
      <Head>
        <title key="title">vim.how - {category.name}</title>
      </Head>
      <SearchInput value={input} onUpdate={setInput} />
      <div className="pt-8 pb-8">
        <CategoryBox category={category}>
          <h2 className="uppercase">{category.name}</h2>
        </CategoryBox>
      </div>
      <div className="flex flex-col items-center pb-8">
        <LinkButton label="Back" to="/" />
      </div>
      <div className="max-w-xl pb-4 text-center">
        {category.descriptionLong}
      </div>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
        <CommandViewList commands={commands} />
      </div>
    </>
  );
};

export default CategoryPage;
