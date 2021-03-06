/* eslint react/no-danger: 0 */
import Document, { Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="msapplication-TileColor" content="#b91d47" />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
          <meta name="theme-color" content="#333333" />
          <meta
            name="description"
            content="Short Hair Company is an Austin based, traditional barbershop with a modern twist. Come select a barber, a hair cut, and book an appointment online!"
          />
          <meta itemProp="name" content="Short Hair Company" />
          <meta
            itemProp="description"
            content="Short Hair Company is an Austin based, traditional barbershop with a modern twist. Come select a barber, a hair cut, and book an appointment online!"
          />
          <meta name="og:title" content="Short Hair Company" />
          <meta
            name="og:description"
            content="Short Hair Company is an Austin based, traditional barbershop with a modern twist. Come select a barber, a hair cut, and book an appointment online!"
          />
          <meta
            name="og:image"
            content="https://res.cloudinary.com/vpp/image/upload/c_scale,f_auto,h_630,q_auto,w_1200/v1526326223/shc-bus-card.jpg"
          />
          <meta name="og:url" content="https://www.shorthaircompany.com" />
          <meta name="og:site_name" content="Short Hair Company" />
          <meta name="og:type" content="website" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
