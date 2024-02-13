import { ReactElement } from "react";
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

  render(): ReactElement {
    return (
      <Html lang="en" className="bg-black">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="icon"
            type="image/png"
            href="/images/icons/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="/images/icons/icon-192x192.png"
          />
          <link
            rel="preload"
            href="/fonts/uU9NCBsR6Z2vfE9aq3bh3dSDqFGedA.woff2"
            as="font"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="text-white bg-black font-fira">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
