import Document, { Html, Head, Main, NextScript } from 'next/document'

class NextDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>  */}
        </body>
      </Html>
    )
  }
}

export default NextDocument