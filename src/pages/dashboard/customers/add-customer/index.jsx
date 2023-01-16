/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import { ThemeProvider } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
// import AddCustomer from '../../../../components/Dashboard/AddCustomer/AddCustomer';
import dashboardTheme from '../../../../theme/dashboard-theme';

const AddCustomer = dynamic(() =>
  import('../../../../components/Dashboard/AddCustomer/AddCustomer')
);

const AddCustomerPage = () => (
  <ThemeProvider theme={dashboardTheme}>
    <AddCustomer />
  </ThemeProvider>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dAddCustomer'])),
      // Will be passed to the page component as props
    },
  };
}

export default AddCustomerPage;
