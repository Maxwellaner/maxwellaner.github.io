import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* metas for facebook */}
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Maxwell Laner" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Maxwell Laner - Desenvolvedor" />
          <meta
            property="og:url"
            content="https://maxwellaner.vercel.app/"
          />
          <link
            itemProp="thumbnailUrl"
            href="https://maxwellaner.vercel.app/assets/thumbnail.jpeg"
          />
          <meta property='og:image' content='https://maxwellaner.vercel.app/assets/maxwell.png' />
          <meta property="og:image:type" content="image/png" />
          <meta property="fb:app_id" content="XXXXXXXXXXXX" />
          <meta
            property="og:image:alt"
            content="Maxwell Laner - Desenvolvedor"
          />

          {/* for whatsapp */}
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />

          {/* metas for twitter */}
          <meta
            name="twitter:url"
            content="https://maxwellaner.vercel.app/"
          />
          <meta name="twitter:title" content="Maxwell Laner - Desenvolvedor" />
          <meta name="twitter:description" content="Maxwell Laner é um desenvolvedor Full Stack
              com conhecimentos sólidos no Ecossistema JavaScript, apaixonado
              por código e desafios e comprometido com a qualidade de seu trabalho." />
          <meta
            name="twitter:image"
            content="https://maxwellaner.vercel.app/assets/maxwell.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
