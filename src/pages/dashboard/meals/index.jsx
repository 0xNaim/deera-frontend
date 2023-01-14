import { ThemeProvider } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Layout from '../../../components/Dashboard/Layout/Layout';
import Meals from '../../../components/Dashboard/Meals/Main';
import DashboardTheme from '../../../theme/dashboard-theme';

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
      ...(await serverSideTranslations(locale, ['dSidebar', 'header'])),
      // Will be passed to the page component as props
    },
  };
}

export default MealsPage;
