import { ThemeProvider } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';
import Layout from '@components/Dashboard/Layout/Layout';
import DashboardTheme from '@theme/dashboard-theme';

const Meals = dynamic(() => import('@components/Dashboard/Meals/Main'), { ssr: false });
const MealsPage = () => (
  <ThemeProvider theme={DashboardTheme}>
    <Layout>
      <Meals />
    </Layout>
  </ThemeProvider>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dMeals'])),
      // Will be passed to the page component as props
    },
  };
}

export default MealsPage;
