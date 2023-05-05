import React, { useState, useEffect, createContext } from 'react';
import './globals.css'
import Head from 'next/head';


function App({ Component, pageProps }) {

  const getLayout = page => (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
        <title>File Manager</title>
      </Head>
      { page}
    </>
  );

  return getLayout(<Component {...pageProps} />);
}

export default App;