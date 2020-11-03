import { CommandViewList } from "../../components/command-view-list";
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
      <h2 className="uppercase">{category.name}</h2>
      <div className="max-w-xl pt-6">
        <div className="p-4">{category.descriptionLong}.</div>
        <CommandViewList commands={commands} />
      </div>
    </div>
  );
};

export default CategoryPage;
