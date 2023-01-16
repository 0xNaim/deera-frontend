/* eslint-disable object-curly-newline */
import { ThemeProvider } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
// import Coupons from '../../../components/Dashboard/Coupons/Coupons';
import dashboardTheme from '../../../theme/dashboard-theme';

const Coupons = dynamic(() => import('../../../components/Dashboard/Coupons/Coupons'));

const CouponsPage = () => (
  <ThemeProvider theme={dashboardTheme}>
    <Coupons />
  </ThemeProvider>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dCoupons'])),
    },
  };
}

export default CouponsPage;
