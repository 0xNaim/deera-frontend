/* eslint-disable object-curly-newline */
import SEO from '@hooks/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const Subscription = dynamic(() => import('@components/Client/Subscription/Subscription'));
const Layout = dynamic(() => import('@components/Layout'), { suspense: true });

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
