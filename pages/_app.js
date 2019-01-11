import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Modal from '../Components/Modal';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Short Hair Company</title>
        </Head>
        <Modal />
        <Component {...pageProps} />
      </Container>
    );
  }
}
