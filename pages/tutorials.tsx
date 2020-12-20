import React, { FC } from "react";
import Head from "next/head";
import { LinkButton } from "../components/link-button";
import { ContentLinkItem } from "../components/content-link-item";

const TutorialsPage: FC = () => (
  <>
    <Head>
      <title key="title">vim.how - Tutorials</title>
    </Head>
    <div className="flex flex-col items-center pb-8">
      <LinkButton label="Back" to="/" />
    </div>
    <h2 className="pb-8">Tutorials</h2>
    <div className="max-w-xl text-center pb-8">
      Tutorials to start learning Vim.
    </div>
    <div className="max-w-xl">
      <ContentLinkItem
        title="Learn vim For the Last Time: A Tutorial and Primer"
        link="https://danielmiessler.com/study/vim/"
      >
        The goal of this tutorial is to take you through every stage of
        progression—from understanding the vim philosophy (which will stay with
        you forever), to surpassing your skill with your current editor, to
        becoming “one of those people”.
      </ContentLinkItem>
      <ContentLinkItem
        title="Vim Adventures"
        link="https://vim-adventures.com/"
      >
        Learn Vim while playing a game.
      </ContentLinkItem>
      <ContentLinkItem title="OpenVim tutorial" link="https://www.openvim.com/">
        An interactive Vim tutorial.
      </ContentLinkItem>
      <ContentLinkItem
        title="Boost your coding fu with VSCode and Vim"
        link="https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/"
      >
        Book, plugin, videos and a podcast for learning Vim in Visual Studio
        Code.
      </ContentLinkItem>
    </div>
  </>
);

export default TutorialsPage;
