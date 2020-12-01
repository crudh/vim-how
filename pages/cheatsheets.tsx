import { FC } from "react";
import Head from "next/head";
import { LinkButton } from "../components/link-button";

const CheatSheetsPage: FC = () => (
  <>
    <Head>
      <title key="title">vim.how - Cheat Sheets</title>
    </Head>
    <div className="flex flex-col items-center pb-8">
      <LinkButton label="Back" to="/" />
    </div>
    <h2>Cheat Sheets</h2>
  </>
);

export default CheatSheetsPage;
