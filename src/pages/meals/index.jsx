import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';
// import Meals from '../../components/Client/Meals/Meals';
// import Layout from '../../components/Layout';

const Layout = dynamic(() => import('../../components/Layout'), { ssr: false });
const Meals = dynamic(() => import('../../components/Client/Meals/Meals'));

const MealsPage = () => (
  <Layout>
    <Meals />
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

export default MealsPage;
