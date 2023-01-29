import SEO from '@hooks/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@components/Layout'), { ssr: false });
const Meals = dynamic(() => import('@components/Client/Meals/Meals'), { ssr: false });

const MealsPage = () => (
  <Layout>
    <SEO title="Meals page || The best subscriptions for a healthy life" />
    <Meals />
  </Layout>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar', 'dMain', 'dMeals'])),
      // Will be passed to the page component as props
    },
  };
}

export default MealsPage;
