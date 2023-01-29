/* eslint-disable object-curly-newline */
import { ThemeProvider } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import dashboardTheme from '@theme/dashboard-theme';

const AddCoupon = dynamic(() => import('@components/Dashboard/AddCoupon/AddCoupon'), {
  ssr: false,
});

const AddCouponPage = () => (
  <ThemeProvider theme={dashboardTheme}>
    <AddCoupon />
  </ThemeProvider>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dCoupons'])),
      // Will be passed to the page component as props
    },
  };
}

export default AddCouponPage;
