import { ChangeEvent, FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { CategoryBox } from "../../components/category-box";
import { CommandViewList } from "../../components/command-view-list";
import { LinkButton } from "../../components/link-button";
import { categoriesList, categoryById } from "../../utils/categories";
import { commandsByCategoryId, searchCommands } from "../../utils/commands";
import { queryParamAsString } from "../../utils/routes";

export const getStaticProps: GetStaticProps = async () => ({ props: {} });

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: categoriesList.map((category) => ({
    params: { id: category.id.toString() },
  })),
  fallback: false,
});

const CategoryPage: FC = () => {
  const router = useRouter();
  const search = queryParamAsString(router.query.search);
  const categoryId = Number(router.query.id);
  const category = categoryById(categoryId);

  if (!category) return null;

  const commands =
    search === ""
      ? commandsByCategoryId(categoryId)
      : searchCommands(search, categoryId);

  const handleUpdateSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const path =
      input === ""
        ? `/categories/${categoryId}`
        : `/categories/${categoryId}?search=${input}`;

    router.push(encodeURI(path), undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title key="title">vim.how - {category.name}</title>
      </Head>
      <input
        className="p-2 text-black border-gray-500 border-2 outline-none rounded-lg hover:border-white focus:border-white"
        placeholder="Search command"
        type="text"
        value={search}
        onChange={handleUpdateSearch}
        aria-label="Search"
      />
      <div className="pt-4 pb-4">
        <CategoryBox category={category}>
          <h2 className="uppercase">{category.name}</h2>
        </CategoryBox>
      </div>
      <div className="max-w-xl text-center pb-8">
        {category.descriptionLong}
      </div>
      <div className="flex flex-col items-center">
        <LinkButton label="Back" to="/" />
      </div>
      <div className="w-full sm:w-2/3 md:w-1/2 xl:w-1/3 pt-8">
        <CommandViewList commands={commands} />
      </div>
    </>
  );
};

export default CategoryPage;
