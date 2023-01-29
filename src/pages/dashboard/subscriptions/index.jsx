/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable object-curly-newline */
import { ThemeProvider } from '@mui/material';
import dashboardTheme from '@theme/dashboard-theme';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

const Header = dynamic(() => import('@components/Dashboard/common/Header/Header'), {
  ssr: false,
});
const Layout = dynamic(() => import('@components/Dashboard/Layout/Layout'), {
  ssr: false,
});
const SubscriptionTable = dynamic(() => import('@components/Dashboard/Subscription/Subscription'));

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
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dSubscription'])),
    },
  };
}

export default SubscriptionPage;
