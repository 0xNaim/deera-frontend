/* eslint-disable object-curly-newline */
import { ThemeProvider } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
// import Orders from '../../../components/Dashboard/Orders/Orders';
import dashboardTheme from '../../../theme/dashboard-theme';

const Orders = dynamic(() => import('../../../components/Dashboard/Orders/Orders'));

const OrdersPage = () => (
  <ThemeProvider theme={dashboardTheme}>
    <Orders />
  </ThemeProvider>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dOrders'])),
      // Will be passed to the page component as props
    },
  };
}

export default OrdersPage;
