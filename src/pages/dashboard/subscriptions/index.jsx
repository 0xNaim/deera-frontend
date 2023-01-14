/* eslint-disable object-curly-newline */
import { ThemeProvider } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SubscriptionTable from '../../../components/Dashboard/Subscription/Subscription';
import dashboardTheme from '../../../theme/dashboard-theme';

const Header = dynamic(() => import('../../../components/Dashboard/common/Header/Header'), {
  ssr: false,
});
const Layout = dynamic(() => import('../../../components/Dashboard/Layout/Layout'), { ssr: false });

const SubscriptionPage = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={dashboardTheme}>
      <Layout>
        <Header title={t('header:type_of_subscription')} />
        <SubscriptionTable />
      </Layout>
    </ThemeProvider>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header'])),
      // Will be passed to the page component as props
    },
  };
}

export default SubscriptionPage;
