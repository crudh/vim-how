import { FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { Menu } from "../components/menu";
import "../../styles/index.css";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title key="title">vim.how - searchable vim command catalog</title>
      <meta
        name="description"
        content="A searchable catalog of vim commands organized by category. It can be installed and works offline."
      />
      <meta
        name="keywords"
        content="vim.how vim vi how howto command commands search documentation help"
      />
      <meta name="theme-color" content="#000000" />
    </Head>
    <Menu />
    <div className="flex flex-col items-center min-h-screen">
      <header className="p-2 pb-8">
        <h1>vim.how</h1>
      </header>
      <main className="flex flex-col items-center flex-1 w-full">
        <Component {...pageProps} />
      </main>
    </div>
    <Analytics />
  </>
);

export default App;
