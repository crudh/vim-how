import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/index.css";

const Header = () => (
  <header className="grid place-items-center p-2">
    <h1>vim.how</h1>
  </header>
);

const Footer = () => (
  <footer className="grid place-items-center p-2">No copyright here!</footer>
);

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>vim.how</title>
      <meta
        name="Description"
        content="vim.how vim vi how howto command commands search documentation help"
      />
      <meta name="theme-color" content="#000000" />
    </Head>
    <div className="main-grid grid gap-4 h-screen">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  </>
);

export default App;
