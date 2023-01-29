/* eslint-disable object-curly-newline */
import { ThemeProvider } from '@mui/material';
import dashboardTheme from '@theme/dashboard-theme';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const Settings = dynamic(() => import('@components/Dashboard/Settings/Settings'));

const SettingsPage = () => (
  <ThemeProvider theme={dashboardTheme}>
    <Settings />
  </ThemeProvider>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dSettings'])),
      // Will be passed to the page component as props
    },
  };
}

export default SettingsPage;
