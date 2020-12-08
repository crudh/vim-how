import { FC } from "react";
import Head from "next/head";
import { LinkButton } from "../components/link-button";

const EditorsPage: FC = () => (
  <>
    <Head>
      <title key="title">vim.how - Editors</title>
    </Head>
    <div className="flex flex-col items-center pb-8">
      <LinkButton label="Back" to="/" />
    </div>
    <h2>Editors</h2>
  </>
);

export default EditorsPage;
