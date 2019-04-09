import React from 'react';
import Head from 'next/head';
import stylesheet from '../styles/style.scss';

const HtmlHead = () => (
    <Head>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: stylesheet }}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Support Group Network</title>
    </Head>
);

export default HtmlHead;