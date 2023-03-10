/* eslint-disable object-curly-newline */
import SubscriptionPeriods from '@components/Dashboard/SubscriptionPeriods/SubscriptionPeriods';
import { ThemeProvider } from '@mui/material';
import DashboardTheme from '@theme/dashboard-theme';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

const Header = dynamic(() => import('@components/Dashboard/common/Header/Header'), {
  ssr: false,
});
const Layout = dynamic(() => import('@components/Dashboard/Layout/Layout'), {
  ssr: false,
});

const SubscriptionPeriodsPage = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={DashboardTheme}>
      <Layout>
        <Header title={t('header:add_a_new_subscription')} />
        <SubscriptionPeriods />
      </Layout>
    </ThemeProvider>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dSubscription'])),
    },
  };
}

export default SubscriptionPeriodsPage;
