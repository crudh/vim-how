import { FC } from "react";
import Head from "next/head";
import { LinkButton } from "../components/link-button";
import { ContentLinkItem } from "../components/content-link-item";

const CheatSheetsPage: FC = () => (
  <>
    <Head>
      <title key="title">vim.how - Cheat Sheets</title>
    </Head>
    <div className="flex flex-col items-center pb-8">
      <LinkButton label="Back" to="/" />
    </div>
    <h2 className="pb-8">Cheat sheets</h2>
    <div className="max-w-xl text-center pb-8">
      Cheat sheets gives a condensend overview of commands and are excellent for
      printing.
    </div>
    <div className="max-w-xl">
      <ContentLinkItem title="vim.rtorr.com" link="https://vim.rtorr.com/">
        An excellent cheat sheet that aims to be one of the most accessible vim
        guides available. They made sure to support mobile, desktop and many
        languages.
      </ContentLinkItem>
      <ContentLinkItem
        title="hackjutsu / vim-cheatsheet"
        link="https://github.com/hackjutsu/vim-cheatsheet"
      >
        A cheatsheet summarized from personal experience and other online
        tutorials.
      </ContentLinkItem>
      <ContentLinkItem
        title="vimhelp.org quick reference"
        link="https://vimhelp.org/quickref.txt.html"
      >
        A quick help reference from the vim reference manual.
      </ContentLinkItem>
      <ContentLinkItem
        title="Basic PDF cheat sheet"
        link="https://www.cs.cmu.edu/~15131/f17/topics/vim/vim-cheatsheet.pdf"
      >
        A good printable cheat sheet as PDF with the basic commands.
      </ContentLinkItem>
    </div>
  </>
);

export default CheatSheetsPage;
