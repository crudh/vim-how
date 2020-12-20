import { FC } from "react";
import Head from "next/head";
import { LinkButton } from "../components/link-button";
import { ContentLinkItem } from "../components/content-link-item";

const EditorsPage: FC = () => (
  <>
    <Head>
      <title key="title">vim.how - Editors</title>
    </Head>
    <div className="flex flex-col items-center pb-8">
      <LinkButton label="Back" to="/" />
    </div>
    <h2 className="pb-8">Editors</h2>
    <div className="max-w-xl text-center pb-8">
      Editors that, either by default or by extensions, provide a Vim-like
      editing experience.
    </div>
    <div className="max-w-xl">
      <ContentLinkItem title="Onivim 2" link="https://onivim.io/">
        Fast, native, cross-platform combining Vim-style modal editing with the
        aesthetics and language features of modern editors. Aims to support all
        Visual Studio Code extensions.
      </ContentLinkItem>
      <ContentLinkItem
        title="Visual Studio Code"
        link="https://marketplace.visualstudio.com/items?itemName=vscodevim.vim"
      >
        Vim emulation for Visual Studio Code exists as an installable extension.
      </ContentLinkItem>
      <ContentLinkItem
        title="IntelliJ platform"
        link="https://plugins.jetbrains.com/plugin/164-ideavim"
      >
        IdeaVim is a Vim emulation plugin for IntelliJ Platform-based IDEs like
        WebStorm and IntelliJ.
      </ContentLinkItem>
      <ContentLinkItem title="Neovim" link="https://neovim.io/">
        Hyperextensible Vim-based text editor.
      </ContentLinkItem>
    </div>
  </>
);

export default EditorsPage;
