import { FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";

const Header = () => (
  <header className="p-2 pb-8">
    <h1>vim.how</h1>
  </header>
);

const Footer = () => (
  <footer className="p-2 pt-8 flex">
    <a href="https://crudh.se">Contact</a>
    <div className="pl-4 pr-4">|</div>
    <a href="https://github.com/crudh/vim-how">GitHub</a>
  </footer>
);

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
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="w-full flex-1 flex flex-col items-center">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  </>
);

export default App;
