/* eslint-disable object-curly-newline */
import { ThemeProvider } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';
import { useTranslation } from 'react-i18next';
import dashboardTheme from '../../../../theme/dashboard-theme';

const Header = dynamic(() => import('../../../../components/Dashboard/common/Header/Header'), {
  ssr: false,
});

const Layout = dynamic(() => import('../../../../components/Dashboard/Layout/Layout'), {
  ssr: false,
});

const AddMeal = dynamic(() => import('../../../../components/Dashboard/AddMeal/AddMeal'));

const MealsPage = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={dashboardTheme}>
      <Layout>
        {/* <Meals /> */}
        <Header title={t('header:add_meals')} />
        <AddMeal />
      </Layout>
    </ThemeProvider>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dMeals'])),
      // Will be passed to the page component as props
    },
  };
}

export default MealsPage;
