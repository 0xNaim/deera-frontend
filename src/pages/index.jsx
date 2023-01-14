// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
// import Home from '../components/Client/Home/Home';
// import Layout from '../components/Layout';

const Layout = dynamic(() => import('../components/Layout'), { ssr: false });
const Home = dynamic(() => import('../components/Client/Home/Home'), { ssr: false });

const HomePage = () => (
  <Layout>
    <Home />
  </Layout>
);
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'navbar', 'dSidebar'])),
      // Will be passed to the page component as props
    },
  };
}

export default HomePage;
