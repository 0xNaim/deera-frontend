/* eslint-disable object-curly-newline */
import { ThemeProvider } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
// import Customers from '../../../components/Dashboard/Customers/Customer';
import dashboardTheme from '../../../theme/dashboard-theme';

const Customers = dynamic(() => import('../../../components/Dashboard/Customers/Customer'), {
  ssr: false,
});

const CustomersPage = () => (
  <ThemeProvider theme={dashboardTheme}>
    <Customers />
  </ThemeProvider>
);

// export async function getStaticProps({ locale }) {
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dCustomers'])),
      // Will be passed to the page component as props
    },
  };
}

export default CustomersPage;
