import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Short Hair Company</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="google-site-verification" content="u5z3tXvVtXiL377xGu8hwUMB8dhtvhM0O83Y8NKJ3hM" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="msapplication-TileColor" content="#b91d47" />
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <meta name="theme-color" content="#333333" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
          <title>Short Hair Company</title>
          <meta name="description" content="Barber Shop Austin Texas" />
          <meta itemProp="name" content="Short Hair Company" />
          <meta itemProp="description" content="Barber Shop Austin Texas" />
          <meta name="og:title" content="Short Hair Company" />
          <meta name="og:description" content="Barber Shop Austin Texas" />
          <meta
            name="og:image"
            content="https://res.cloudinary.com/vpp/image/upload/c_scale,f_auto,h_630,q_auto,w_1200/v1526326223/shc-bus-card.jpg"
          />
          <meta name="og:url" content="https://www.shorthaircompany.com" />
          <meta name="og:site_name" content="Short Hair Company" />
          <meta name="og:type" content="website" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
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
