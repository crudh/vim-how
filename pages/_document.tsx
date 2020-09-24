import * as React from "react";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/icons/icon-192x192.png"
          />
        </Head>
        <body className="bg-black text-white font-fira">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
