// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@hooks/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@components/Layout'), { ssr: false });
const Home = dynamic(() => import('@components/Client/Home/Home'), { ssr: false });

const HomePage = () => (
  <Layout>
    <SEO title="The best subscriptions for a healthy life" />
    <Home />
  </Layout>
);
export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['home', 'navbar'])) } };
}

export default HomePage;
