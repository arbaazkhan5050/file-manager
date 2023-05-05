import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' prefix='og: https://ogp.me/ns#'>
        <Head>

        </Head>
        <body style={{ overflow: 'auto' }}>
          <Main />
          <NextScript />
        </body>
        <div id='tooltip'></div>
      </Html>
    );
  }
}
