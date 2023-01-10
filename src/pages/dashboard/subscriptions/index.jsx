import { ThemeProvider } from '@mui/material';
import React from 'react';
import Header from '../../../components/Dashboard/common/Header/Header';
import Layout from '../../../components/Dashboard/Layout/Layout';
import SubscriptionTable from '../../../components/Dashboard/Subscription/Subscription';
import dashboardTheme from '../../../theme/dashboard-theme';
// import Meals from '../../../components/Dashboard/Meals/Main';

const SubscriptionPage = () => (
  <ThemeProvider theme={dashboardTheme}>
    <Layout>
      <Header title="Type of Subscription" />
      {/* <Meals /> */}
      <SubscriptionTable />
    </Layout>
  </ThemeProvider>
);

export default SubscriptionPage;
