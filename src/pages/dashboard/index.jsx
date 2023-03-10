import Main from '@components/Dashboard/Main/Main';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@components/Dashboard/Layout/Layout'), { ssr: false });

const MainPage = () => (
  <Layout>
    <Main />
  </Layout>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dMain'])),
      // Will be passed to the page component as props
    },
  };
}

export default MainPage;
