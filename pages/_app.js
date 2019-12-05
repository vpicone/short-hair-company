import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Modal from '../Components/Modal';
import 'semantic-ui-css/semantic.min.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Short Hair Company</title>
        </Head>
        <Modal />
        <Component {...pageProps} />
      </>
    );
  }
}
