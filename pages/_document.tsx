import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/static/fonts/TlwgTypewriter.ttf"
            as="font"
            crossOrigin=""
          >
          </link>
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default MyDocument;