import { FC } from "react";
import Head from "next/head";
import { LinkButton } from "../components/link-button";

const Editor: FC<{ title: string; link: string }> = ({
  title,
  link,
  children,
}) => (
  <div className="transition duration-300 p-4 border-gray-900 border-2 rounded-lg mb-4 hover:border-gray-500">
    <h3>{title}</h3>
    <div className="pt-4 pb-4">{children}</div>
    <a className="font-bold" href="https://onivim.io/">
      {link}
    </a>
  </div>
);

const EditorsPage: FC = () => (
  <>
    <Head>
      <title key="title">vim.how - Editors</title>
    </Head>
    <div className="flex flex-col items-center pb-8">
      <LinkButton label="Back" to="/" />
    </div>
    <h2 className="pb-8">Editors</h2>
    <div className="max-w-xl">
      <Editor title="Onivim 2" link="https://onivim.io/">
        Fast, native, cross-platform combining Vim-style modal editing with the
        aesthetics and language features of modern editors. Aims to support all
        Visual Studio Code extensions.
      </Editor>
      <Editor
        title="Visual Studio Code"
        link="https://marketplace.visualstudio.com/items?itemName=vscodevim.vim"
      >
        Vim emulation for Visual Studio Code exists as an installable extension.
      </Editor>
      <Editor
        title="IntelliJ platform"
        link="https://plugins.jetbrains.com/plugin/164-ideavim"
      >
        IdeaVim is a Vim emulation plugin for IntelliJ Platform-based IDEs like
        WebStorm and IntelliJ.
      </Editor>
      <Editor title="Neovim" link="https://neovim.io/">
        Hyperextensible Vim-based text editor.
      </Editor>
    </div>
  </>
);

export default EditorsPage;
