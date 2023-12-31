import Document,{ Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
    <Html lang="en">
      <Head >

        
        <link rel="shortcut icon" href="/assets/images/logoUmkm.svg" type="image/x-icon"/>
        <link rel="preload" href="/assets/images/logoUmkm.svg" type="image/x-icon" as="image"/>
        
        
        {/* <link rel="stylesheet" href="/assets/css/style.css"/> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet"/>

        {/* <link rel="stylesheet" href="/assets/plugins/slick/slick.css"/> */}
        <link rel="stylesheet" href="/assets/plugins/font-awesome/fontawesome.min.css"/>
        <link rel="stylesheet" href="/assets/plugins/font-awesome/brands.css"/>
        <link rel="stylesheet" href="/assets/plugins/font-awesome/solid.css"/>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>

        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )

}
}
export default MyDocument;