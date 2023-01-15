/* eslint-disable object-curly-newline */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';
import SEO from '../../hooks/SEO';

const Subscription = dynamic(() => import('../../components/Client/Subscription/Subscription'));
const Layout = dynamic(() => import('../../components/Layout'), { ssr: false });

const SubscriptionPage = () => (
  <Layout>
    <SEO title="Subscription || The best subscriptions for a healthy life" />
    <Subscription />
  </Layout>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar'])),
      // Will be passed to the page component as props
    },
  };
}

export default SubscriptionPage;
