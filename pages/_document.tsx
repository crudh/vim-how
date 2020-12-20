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
      <Html lang="en">
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
          {process.env.VERCEL_ENV === "production" ? (
            <script async data-api="/_hive" src="/bee.js"></script>
          ) : null}
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
