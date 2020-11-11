import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/index.css";
import { FC } from "react";

const Header = () => (
  <header className="p-2 pb-8">
    <h1>vim.how</h1>
  </header>
);

const Footer = () => <footer className="p-2 pt-8">No copyright here!</footer>;

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>vim.how</title>
      <meta
        name="Description"
        content="vim.how vim vi how howto command commands search documentation help"
      />
      <meta name="theme-color" content="#000000" />
    </Head>
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="w-full flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  </>
);

export default App;
