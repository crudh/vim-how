import { FC } from "react";
import Head from "next/head";
import { LinkButton } from "../components/link-button";

const TutorialsPage: FC = () => (
  <>
    <Head>
      <title key="title">vim.how - Tutorials</title>
    </Head>
    <div className="flex flex-col items-center pb-8">
      <LinkButton label="Back" to="/" />
    </div>
    <h2>Tutorials</h2>
  </>
);

export default TutorialsPage;
