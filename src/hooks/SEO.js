/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import React from 'react';

const SEO = ({ headTitle }) => {
  const pageTitleDefault = 'The best subscriptions for a healthy life';
  const pageDescription = 'Join us for the best and tailored meals every customers need';
  const hasHeadTitle = Boolean(headTitle);

  const title = hasHeadTitle ? `${headTitle}` : pageTitleDefault;

  const image = '/favicon.ico';

  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta name="description" content={pageDescription} />
      <meta name="author" content="Deera" />
      <meta name="keywords" content="Deera" />
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.facebook.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />

      {/* <!-- linkedin --> */}
      <meta property="linkedin:card" content="summary_large_image" />
      <meta property="linkedin:url" content="https://www.linkedin.com/company" />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={pageDescription} />
      <meta property="linkedin:image" content={image} />
    </Head>
  );
};

SEO.defaultProps = { headTitle: '' };

export default SEO;
