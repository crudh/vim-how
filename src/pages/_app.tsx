import { FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Menu } from "../components/menu";
import "../../styles/index.css";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title key="title">vim.how</title>
      <meta
        name="Description"
        content="vim.how vim vi how howto command commands search documentation help"
      />
      <meta name="theme-color" content="#000000" />
    </Head>
    <Menu />
    <div className="flex flex-col items-center min-h-screen">
      <header className="p-2 pb-8">
        <h1>vim.how</h1>
      </header>
      <main className="w-full flex flex-1 flex-col items-center">
        <Component {...pageProps} />
      </main>
    </div>
  </>
);

export default App;
